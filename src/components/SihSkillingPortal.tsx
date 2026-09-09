import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, ArrowRight, ArrowLeft, Volume2, Sparkles, CheckCircle2, 
  AlertCircle, ShieldCheck, Zap, ChevronRight, Edit3, Lock, 
  PhoneCall, Radio, Smartphone, Building2, RefreshCw, CheckCircle, Award, Briefcase
} from 'lucide-react';

import { 
  type BeneficiaryProfile, 
  type NsqfPathway, 
  samplePresets, 
  skillingQuestions, 
  calculateDynamicScores
} from '../data/sihSkillingData';
import { type LanguageCode, languages } from '../data/languages';

interface SihSkillingPortalProps {
  lang?: LanguageCode;
  onChangeLang?: (lang: LanguageCode) => void;
  onBackToHome: () => void;
}
import { portalText } from '../data/portalText';

export function SihSkillingPortal({ lang = 'hi', onChangeLang, onBackToHome }: SihSkillingPortalProps) {
  // Active Navigation View State
  const [activeTab, setActiveTab] = useState<'interview' | 'profile' | 'results' | 'roadmap'>('interview');
  
  // Language Selection (syncs with global site language)
  const [selectedLang, setSelectedLang] = useState<LanguageCode>(lang);
  const [langConfirmed, setLangConfirmed] = useState(false);

  useEffect(() => {
    setSelectedLang(lang);
  }, [lang]);

  const pt = portalText[selectedLang] || portalText.hi;

  // Voice Interview State
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechText, setSpeechText] = useState('');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  // Text fallback input
  const [manualInput, setManualInput] = useState('');
  const [showManual, setShowManual] = useState(false);

  // Beneficiary Profile State
  const [profile, setProfile] = useState<BeneficiaryProfile>({
    education: "Class 12th Pass",
    currentOccupation: "Agricultural Labourer",
    traditionalOccupation: "Farming",
    existingSkills: "Basic Electrical Wiring & Household Repair",
    interest: "Solar Power / Electrical Engineering",
    employmentPreference: "Self Employment",
    mobility: "Within 25 km",
    state: "Madhya Pradesh",
    district: "Bhopal",
    village: "Kothri"
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [selectedPathway, setSelectedPathway] = useState<NsqfPathway | null>(null);

  const recognitionRef = useRef<any>(null);

  // Speech Recognition Setup
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = selectedLang === 'hi' ? 'hi-IN' : 'en-IN';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setSpeechText(currentTranscript);
      };

      recognition.onerror = (event: any) => {
        console.error("Speech Recognition Error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [selectedLang]);

  // Read question text out loud (TTS)
  const readQuestionTTS = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLang === 'hi' ? 'hi-IN' : 'en-IN';
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Trigger TTS when entering a question
  useEffect(() => {
    if (langConfirmed && activeTab === 'interview') {
      const q = skillingQuestions[currentQIndex];
      if (q) {
        const textToRead = pt.questions?.[currentQIndex]?.prompt || (selectedLang === 'en' ? q.promptEn : q.promptHi);
        readQuestionTTS(textToRead);
      }
    }
  }, [currentQIndex, langConfirmed, activeTab, selectedLang]);

  // Toggle Microphone
  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setSpeechText('');
      try {
        recognitionRef.current?.start();
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Submit Answer for current question
  const handleSaveAnswer = (answerValue: string) => {
    const q = skillingQuestions[currentQIndex];
    const newAnswers = { ...answers, [q.id]: answerValue };
    setAnswers(newAnswers);

    setProfile(prev => ({
      ...prev,
      [q.id]: answerValue
    }));

    setSpeechText('');
    setManualInput('');

    if (currentQIndex < skillingQuestions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    } else {
      setActiveTab('profile');
    }
  };

  // Load Preset Profile
  const handleLoadPreset = (presetProfile: BeneficiaryProfile) => {
    setProfile(presetProfile);
    const answersMap: Record<string, string> = {
      education: presetProfile.education,
      currentOccupation: presetProfile.currentOccupation,
      traditionalOccupation: presetProfile.traditionalOccupation,
      existingSkills: presetProfile.existingSkills,
      interest: presetProfile.interest,
      employmentPreference: presetProfile.employmentPreference,
      mobility: presetProfile.mobility,
      location: `${presetProfile.state}, ${presetProfile.district}, ${presetProfile.village}`
    };
    setAnswers(answersMap);
    setLangConfirmed(true);
    setActiveTab('profile');
  };

  // Calculate scores
  const recommendations = calculateDynamicScores(profile);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24">
      
      {/* Light Header */}
      <header className="bg-white border-b-2 border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-3 cursor-pointer" onClick={onBackToHome}>
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-md text-white font-bold text-lg">
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-slate-900">Sarkari Sathi</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full font-bold">
                  PM-AJAY Skilling
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">AI Voice Assistant for Livelihood & NSQF Recommendations</p>
            </div>
          </div>

          {/* Nav Tabs & Language Toggle */}
          <div className="flex items-center gap-2">
            
            <div className="relative flex items-center bg-slate-100 p-1 rounded-full border border-slate-200 text-xs font-bold mr-1">
              <select 
                value={selectedLang}
                onChange={(e) => {
                  const newLang = e.target.value as LanguageCode;
                  setSelectedLang(newLang);
                  if (onChangeLang) onChangeLang(newLang);
                }}
                className="bg-transparent border-none focus:outline-none text-xs font-bold text-slate-700 cursor-pointer appearance-none px-3 py-1 pr-6"
              >
                {Object.values(languages).map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-slate-500">
                <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            <button 
              onClick={() => setActiveTab('interview')}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'interview' ? 'bg-primary-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {pt.navVoice}
            </button>
            <button 
              onClick={() => setActiveTab('profile')}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'profile' || activeTab === 'results' ? 'bg-primary-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {pt.navProfile}
            </button>
            <button 
              onClick={onBackToHome}
              className="hidden sm:flex items-center gap-1 text-slate-500 hover:text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> {pt.navBack}
            </button>
          </div>

        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-5xl mx-auto px-4 pt-8">

        {/* 1. HERO BANNER (When interview not started) */}
        {!langConfirmed && activeTab === 'interview' && (
          <div className="animate-fade-in-up">
            
            <div className="glass-panel rounded-3xl p-8 md:p-12 mb-10 text-center relative overflow-hidden border-2 border-primary-100">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  PM-AJAY Grant-in-Aid (GIA) Component Initiative
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                  {selectedLang === 'hi' ? (
                    <>“आपकी आवाज़। आपके कौशल। <br /><span className="gradient-text">आपका अवसर।”</span></>
                  ) : (
                    <>“Your Voice. Your Skills. <br /><span className="gradient-text">Your Opportunity.”</span></>
                  )}
                </h1>

                <p className="text-xl font-bold text-primary-700 mb-4">
                  {pt.bannerSub}
                </p>

                <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                  {pt.bannerDesc}
                </p>

                {/* Workflow Diagram */}
                <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 md:p-5 mb-8 max-w-2xl mx-auto">
                  <p className="text-xs uppercase font-mono text-slate-500 mb-3 font-bold">{pt.journeyTitle}</p>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs md:text-sm font-semibold text-slate-800">
                    <div className="bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm">{pt.journeyCitizen}</div>
                    <ChevronRight className="w-4 h-4 text-primary-600" />
                    <div className="bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm">{pt.journeyVoice}</div>
                    <ChevronRight className="w-4 h-4 text-primary-600" />
                    <div className="bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm">{pt.journeyGap}</div>
                    <ChevronRight className="w-4 h-4 text-primary-600" />
                    <div className="bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm">{pt.journeyTraining}</div>
                    <ChevronRight className="w-4 h-4 text-primary-600" />
                    <div className="bg-primary-600 text-white px-3 py-2 rounded-xl font-bold shadow-md">{pt.journeyLivelihood}</div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button 
                    onClick={() => setLangConfirmed(true)}
                    className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl shadow-primary-500/25 transition-all hover-lift flex items-center justify-center gap-3"
                  >
                    <Mic className="w-6 h-6 animate-pulse" />
                    {pt.talkCTA}
                  </button>
                </div>

              </div>

            </div>

            {/* Quick Sample Profiles for Fast Testing */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 mb-12 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary-600" />
                <h3 className="text-base font-bold text-slate-900">{pt.sampleHeader}</h3>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                {pt.sampleDesc}
              </p>

              <div className="grid md:grid-cols-3 gap-3">
                {samplePresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLoadPreset(preset.profile)}
                    className="text-left bg-slate-50 hover:bg-primary-50/50 p-4 rounded-2xl border-2 border-slate-200 hover:border-primary-500 transition-all group"
                  >
                    <p className="font-bold text-sm text-slate-900 group-hover:text-primary-700 mb-1">{preset.label}</p>
                    <p className="text-xs text-slate-600">{preset.profile.education} • {preset.profile.existingSkills}</p>
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* 2. CONVERSATIONAL VOICE INTERVIEW */}
        {langConfirmed && activeTab === 'interview' && (
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            
            {/* Progress indicator */}
            <div className="mb-6 flex items-center justify-between bg-white px-4 py-3 rounded-2xl border-2 border-slate-200 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-primary-600 text-white font-bold text-xs flex items-center justify-center">
                  {currentQIndex + 1}
                </span>
                <span className="text-sm font-bold text-slate-800">
                  {pt.qProgress} {currentQIndex + 1} {pt.of} {skillingQuestions.length} — {skillingQuestions[currentQIndex].title}
                </span>
              </div>
              
              <div className="w-24 bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-primary-600 h-full transition-all duration-300"
                  style={{ width: `${((currentQIndex + 1) / skillingQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Conversational Screen */}
            <div className="glass-panel rounded-3xl p-6 md:p-8 relative overflow-hidden">
              
              {/* Voice Guide Avatar */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-100 border-2 border-primary-300 text-primary-700 flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
                  🗣️
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                    {pt.voiceGuide}
                    {isSpeaking && (
                      <span className="text-xs bg-blue-100 text-blue-700 border border-blue-300 px-2 py-0.5 rounded-full flex items-center gap-1 font-semibold">
                        <Volume2 className="w-3 h-3 animate-pulse" /> {pt.speaking}
                      </span>
                    )}
                  </h2>
                  <p className="text-xs text-primary-700 font-semibold mt-0.5">
                    "{pt.noTyping}"
                  </p>
                </div>
              </div>

              {/* Question Box */}
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 mb-8">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs uppercase font-mono text-primary-700 font-bold tracking-wider">
                    {pt.qProgress} #{skillingQuestions[currentQIndex].num}
                  </span>
                  <button 
                    onClick={() => readQuestionTTS(pt.questions?.[currentQIndex]?.prompt || (selectedLang === 'en' ? skillingQuestions[currentQIndex].promptEn : skillingQuestions[currentQIndex].promptHi))}
                    className="text-xs bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 px-2.5 py-1 rounded-lg flex items-center gap-1 font-semibold"
                  >
                    <Volume2 className="w-3.5 h-3.5" /> {pt.repeatVoice}
                  </button>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                  {pt.questions?.[currentQIndex]?.prompt || (selectedLang === 'en' ? skillingQuestions[currentQIndex].promptEn : skillingQuestions[currentQIndex].promptHi)}
                </h3>
                
                <p className="text-sm text-slate-600 font-medium">
                  {pt.questions?.[currentQIndex]?.subtext || (selectedLang === 'en' ? "" : skillingQuestions[currentQIndex].subtextHi)}
                </p>
              </div>

              {/* Microphone & Waveform */}
              <div className="flex flex-col items-center justify-center py-6 mb-8 bg-slate-50 rounded-2xl border-2 border-slate-200">
                
                <button
                  onClick={toggleListening}
                  className={`relative flex items-center justify-center w-28 h-28 rounded-full transition-all duration-300 shadow-xl ${
                    isListening 
                      ? 'bg-red-500 scale-110 shadow-red-500/40' 
                      : 'bg-gradient-to-br from-primary-600 to-primary-500 hover:scale-105 shadow-primary-500/30'
                  }`}
                >
                  <Mic className={`w-12 h-12 text-white ${isListening ? 'animate-pulse' : ''}`} />
                  {isListening && (
                    <span className="absolute w-full h-full rounded-full border-4 border-red-400 animate-ping opacity-75"></span>
                  )}
                </button>

                <div className="flex items-center gap-1.5 mt-6 h-8">
                  {[40, 70, 30, 90, 50, 80, 40, 60, 100, 50, 70, 30].map((h, i) => (
                    <div 
                      key={i}
                      className={`w-1.5 rounded-full transition-all duration-150 ${
                        isListening ? 'bg-red-500 animate-bounce' : 'bg-slate-300'
                      }`}
                      style={{ 
                        height: isListening ? `${Math.max(12, (h * Math.random()))}px` : '8px',
                        animationDelay: `${i * 0.08}s`
                      }}
                    ></div>
                  ))}
                </div>

                <p className="mt-3 text-sm font-bold text-slate-800">
                  {isListening ? pt.micListening : pt.micTapToSpeak}
                </p>

                {speechText && (
                  <div className="mt-4 bg-primary-50 border-2 border-primary-200 p-4 rounded-2xl max-w-md text-center">
                    <p className="text-xs text-primary-800 font-mono mb-1 font-semibold">{pt.speechRecognized}</p>
                    <p className="text-base text-slate-900 font-extrabold">"{speechText}"</p>
                    <button
                      onClick={() => handleSaveAnswer(speechText)}
                      className="mt-3 bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs px-5 py-2 rounded-xl transition-colors shadow-sm"
                    >
                      {pt.confirmNext}
                    </button>
                  </div>
                )}
              </div>

              {/* Sample Quick Chips */}
              <div className="mb-6">
                <p className="text-xs uppercase font-mono text-slate-500 mb-3 font-bold">
                  {pt.orClick}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(pt.questions?.[currentQIndex]?.options || skillingQuestions[currentQIndex].optionsHi).map((opt: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => handleSaveAnswer(opt)}
                      className="bg-white hover:bg-primary-50 text-slate-800 text-sm font-semibold px-4 py-2.5 rounded-xl border-2 border-slate-200 hover:border-primary-500 transition-all shadow-sm"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Typing Fallback */}
              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-semibold">{pt.micIssue}</span>
                  <button 
                    onClick={() => setShowManual(!showManual)}
                    className="text-xs text-primary-700 hover:text-primary-800 underline font-bold"
                  >
                    {showManual ? pt.hideTyping : pt.typeAnswer}
                  </button>
                </div>

                {showManual && (
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={manualInput}
                      onChange={(e) => setManualInput(e.target.value)}
                      placeholder={pt.typePlaceholder}
                      className="flex-1 bg-white border-2 border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-primary-500"
                    />
                    <button
                      disabled={!manualInput}
                      onClick={() => handleSaveAnswer(manualInput)}
                      className="bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm"
                    >
                      {pt.next}
                    </button>
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

        {/* 3. PROFILE & RECOMMENDATIONS VIEW */}
        {(activeTab === 'profile' || activeTab === 'results') && (
          <div className="space-y-10 animate-fade-in-up">
            
            {/* Header Profile Title */}
            <div className="glass-panel rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-2 border-slate-200">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-2">
                  PM-AJAY GIA Component Livelihood Profile
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">{pt.profileTitle}</h2>
                <p className="text-sm text-slate-600 mt-1">{pt.profileSub}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                  className="bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-xl border-2 border-slate-200 flex items-center gap-2 shadow-sm"
                >
                  <Edit3 className="w-4 h-4" />
                  {isEditingProfile ? pt.saveProfile : pt.editProfile}
                </button>

                <button
                  onClick={() => {
                    setActiveTab('interview');
                    setLangConfirmed(true);
                    setCurrentQIndex(0);
                  }}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <RefreshCw className="w-4 h-4" /> {pt.retakeInterview}
                </button>
              </div>
            </div>

            {/* Profile Grid Cards */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white border-2 border-slate-200 p-5 rounded-2xl shadow-sm">
                <p className="text-xs uppercase font-mono text-slate-500 mb-1 font-bold">{pt.education}</p>
                <p className="text-base font-extrabold text-slate-900">{profile.education}</p>
              </div>

              <div className="bg-white border-2 border-slate-200 p-5 rounded-2xl shadow-sm">
                <p className="text-xs uppercase font-mono text-slate-500 mb-1 font-bold">{pt.currentWork}</p>
                <p className="text-base font-extrabold text-slate-900">{profile.currentOccupation}</p>
              </div>

              <div className="bg-white border-2 border-slate-200 p-5 rounded-2xl shadow-sm">
                <p className="text-xs uppercase font-mono text-slate-500 mb-1 font-bold">{pt.traditionalWork}</p>
                <p className="text-base font-extrabold text-slate-900">{profile.traditionalOccupation}</p>
              </div>

              <div className="bg-white border-2 border-slate-200 p-5 rounded-2xl shadow-sm">
                <p className="text-xs uppercase font-mono text-slate-500 mb-1 font-bold">{pt.existingSkills}</p>
                <p className="text-base font-extrabold text-primary-700">{profile.existingSkills}</p>
              </div>

              <div className="bg-white border-2 border-slate-200 p-5 rounded-2xl shadow-sm">
                <p className="text-xs uppercase font-mono text-slate-500 mb-1 font-bold">{pt.careerInterest}</p>
                <p className="text-base font-extrabold text-emerald-700">{profile.interest}</p>
              </div>

              <div className="bg-white border-2 border-slate-200 p-5 rounded-2xl shadow-sm">
                <p className="text-xs uppercase font-mono text-slate-500 mb-1 font-bold">{pt.workPref}</p>
                <p className="text-base font-extrabold text-slate-900">{profile.employmentPreference}</p>
              </div>

              <div className="bg-white border-2 border-slate-200 p-5 rounded-2xl shadow-sm">
                <p className="text-xs uppercase font-mono text-slate-500 mb-1 font-bold">{pt.mobilityLimit}</p>
                <p className="text-base font-extrabold text-slate-900">{profile.mobility}</p>
              </div>

              <div className="bg-white border-2 border-slate-200 p-5 rounded-2xl shadow-sm">
                <p className="text-xs uppercase font-mono text-slate-500 mb-1 font-bold">{pt.location}</p>
                <p className="text-base font-extrabold text-slate-900">{profile.district}, {profile.state}</p>
              </div>
            </div>

            {/* SKILL GAP ANALYSIS */}
            <div className="glass-panel rounded-3xl p-6 md:p-8">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">{pt.skillGapTitle}</h3>
                  <p className="text-xs text-slate-600">{pt.skillGapSub}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                
                <div className="bg-slate-50 border-2 border-slate-200 p-5 rounded-2xl">
                  <p className="text-xs uppercase font-mono text-primary-700 font-bold mb-2">{pt.currentSit}</p>
                  <p className="text-sm text-slate-800 font-bold mb-3">
                    {profile.currentOccupation} with practical experience in {profile.existingSkills}.
                  </p>
                  <p className="text-xs text-slate-600">
                    Traditional background in {profile.traditionalOccupation} provides strong physical & practical adaptability.
                  </p>
                </div>

                <div className="bg-slate-50 border-2 border-slate-200 p-5 rounded-2xl">
                  <p className="text-xs uppercase font-mono text-emerald-700 font-bold mb-2">{pt.keyStrengths}</p>
                  <ul className="space-y-2 text-xs text-slate-700 font-semibold">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span>Existing practical hands-on experience in basic repair</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span>High motivation for technical & solar field learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span>Willingness to commute up to {profile.mobility}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 border-2 border-slate-200 p-5 rounded-2xl">
                  <p className="text-xs uppercase font-mono text-amber-700 font-bold mb-2">{pt.identifiedGaps}</p>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1 font-bold">
                        <span className="text-slate-800">Industrial Safety Standards</span>
                        <span className="text-amber-700">Needs Certification</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full w-[45%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1 font-bold">
                        <span className="text-slate-800">Technical Equipment Lab</span>
                        <span className="text-amber-700">Needs Practical Lab</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full w-[35%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* NSQF RECOMMENDED PATHWAYS */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-extrabold text-slate-900">{pt.recTitle}</h3>
                  <p className="text-sm text-slate-600">{pt.recSub}</p>
                </div>

                <div className="hidden lg:flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-900 text-xs px-4 py-2 rounded-2xl font-medium">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-600" />
                  <span>{pt.potentialMatch}</span>
                </div>
              </div>

              {/* Pathway Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {recommendations.map((pathway) => (
                  <div 
                    key={pathway.id}
                    className="glass-panel rounded-3xl p-6 hover-lift flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 text-2xl flex items-center justify-center">
                            {pathway.icon}
                          </div>
                          <div>
                            <span className="bg-primary-100 text-primary-800 text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded">
                              NSQF Level {pathway.nsqfLevel} Pathway
                            </span>
                            <h4 className="text-xl font-extrabold text-slate-900 mt-1">{pathway.name}</h4>
                          </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <span className="text-2xl font-black text-primary-600">{pathway.matchScore}%</span>
                          <p className="text-[10px] text-slate-500 font-bold uppercase">{pt.matchScore}</p>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">
                        {pathway.description}
                      </p>

                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-4">
                        <p className="text-xs font-bold text-primary-800 mb-1">{pt.whyRecommended}</p>
                        <p className="text-xs text-slate-700">{pathway.whyRecommended}</p>
                      </div>

                      <div className="space-y-2 mb-6">
                        <p className="text-xs uppercase font-mono text-slate-500 font-bold">{pt.outcomes}</p>
                        {pathway.livelihoodOutcomes.map((out, oIdx) => (
                          <div key={oIdx} className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                            <span className="font-bold text-slate-900">{out.title}</span>
                            <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-semibold">
                              {out.type}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>

                    <button
                      onClick={() => setSelectedPathway(pathway)}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-2xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                      {pt.viewDetailsDoc}
                    </button>

                  </div>
                ))}
              </div>
            </div>

            {/* LIVELIHOOD ROADMAP */}
            <div className="glass-panel rounded-3xl p-6 md:p-10">
              
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs uppercase font-mono bg-primary-100 text-primary-800 px-3.5 py-1 rounded-full font-bold">
                  {pt.roadmapTag}
                </span>
                <h3 className="text-3xl font-extrabold text-slate-900 mt-3">{pt.roadmapTitle}</h3>
                <p className="text-xs text-slate-600 mt-1">{pt.roadmapSub}</p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-6 gap-3">
                {pt.roadmapSteps.map((item: any, index: number) => (
                  <div key={index} className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 text-center hover-lift">
                    <div className="w-8 h-8 rounded-full bg-primary-600 text-white font-extrabold text-sm flex items-center justify-center mx-auto mb-3 shadow-md">
                      {item.step}
                    </div>
                    <h4 className="text-xs font-extrabold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-[10px] text-slate-600 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* RURAL ACCESS CHANNELS */}
            <div className="glass-panel rounded-3xl p-6 md:p-8">
              
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-slate-900">{pt.ruralTitle}</h3>
                <p className="text-xs text-slate-600">{pt.ruralSub}</p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                
                <div className="bg-slate-50 p-5 rounded-2xl border-2 border-slate-200 text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-3">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">📞 IVR Toll-Free</h4>
                  <p className="text-xs text-slate-600">For feature phones without internet</p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border-2 border-slate-200 text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                    <Radio className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">🎙️ WhatsApp Voice Bot</h4>
                  <p className="text-xs text-slate-600">Send voice notes on WhatsApp</p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border-2 border-slate-200 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">📱 Lightweight Web</h4>
                  <p className="text-xs text-slate-600">Works on low-speed 2G/3G networks</p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border-2 border-slate-200 text-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">🖥️ CSC Kiosk Mode</h4>
                  <p className="text-xs text-slate-600">Assisted access at Gram Panchayat</p>
                </div>

              </div>

            </div>

            {/* SECURITY & TRUST SECTION */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs shadow-sm">
              <div className="flex items-center gap-3">
                <Lock className="w-8 h-8 text-primary-600 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">Security & Privacy Protection</h4>
                  <p className="text-slate-600">Only minimal required beneficiary details are collected. Data is protected according to Digital Personal Data Protection guidelines.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="bg-slate-100 text-slate-800 px-3 py-1.5 rounded-xl border border-slate-300 font-mono font-bold">
                  🔐 256-bit Encryption
                </span>
                <span className="bg-slate-100 text-slate-800 px-3 py-1.5 rounded-xl border border-slate-300 font-mono font-bold">
                  🛡️ DPDP Compliant
                </span>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* RECOMMENDATION DETAILS MODAL */}
      {selectedPathway && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-2 border-slate-200 rounded-3xl max-w-2xl w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fade-in-up text-slate-900">
            
            <button 
              onClick={() => setSelectedPathway(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{selectedPathway.icon}</span>
              <div>
                <span className="bg-primary-100 text-primary-800 text-xs px-2.5 py-0.5 rounded font-mono font-bold">
                  NSQF Level {selectedPathway.nsqfLevel} • {selectedPathway.sector}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{selectedPathway.name}</h3>
              </div>
            </div>

            <div className="space-y-6 text-xs text-slate-700">
              
              <div>
                <h4 className="font-bold text-slate-900 uppercase font-mono text-[10px] mb-1">Course Duration & Requirements</h4>
                <p className="bg-slate-50 p-3 rounded-xl border border-slate-200 font-semibold">
                  ⏱️ <strong>{pt.modalDuration}</strong> {selectedPathway.duration} | 🎓 <strong>{pt.modalEdu}</strong> {selectedPathway.minEducation}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-primary-800 uppercase font-mono text-[10px] mb-1">{pt.modalBenefits}</h4>
                <ul className="bg-primary-50 border border-primary-200 p-4 rounded-2xl space-y-1.5 text-slate-800 font-semibold">
                  {selectedPathway.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase font-mono text-[10px] mb-1">{pt.modalDocs}</h4>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1 font-semibold">
                  {selectedPathway.requiredDocuments.map((doc, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-600"></span>
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase font-mono text-[10px] mb-1">{pt.modalOpp}</h4>
                <div className="space-y-2">
                  {selectedPathway.localOpportunities.map((op, oIdx) => (
                    <div key={oIdx} className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-slate-900">{op.title}</p>
                        <p className="text-[10px] text-slate-500 font-medium">📍 {op.location}</p>
                      </div>
                      <span className="text-primary-700 font-mono font-bold bg-primary-100 px-2.5 py-1 rounded">
                        {op.avgIncome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[10px] text-slate-500 font-mono">
                Official Application Channel: PM-AJAY GIA District Officer / State Skill Portal
              </span>
              <button 
                onClick={() => {
                  alert(pt.guidanceAlert);
                  setSelectedPathway(null);
                }}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md w-full sm:w-auto"
              >
                {pt.getGuidance}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
