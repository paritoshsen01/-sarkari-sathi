import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, ArrowRight, ArrowLeft, Volume2, Square, Sparkles, CheckCircle2, 
  AlertCircle, ShieldCheck, Cpu, Smartphone, PhoneCall, Radio, Building2, 
  UserCheck, Award, Briefcase, ChevronRight, Edit3, BarChart3, Lock, Globe,
  BookOpen, Compass, CheckCircle, RefreshCw, Zap, Sun, Wrench, Laptop
} from 'lucide-react';

import { 
  type BeneficiaryProfile, 
  type NsqfPathway, 
  samplePresets, 
  skillingQuestions, 
  calculateDynamicScores, 
  giaProblemSolutions 
} from '../data/sihSkillingData';

interface SihSkillingPortalProps {
  onBackToHome: () => void;
}

export function SihSkillingPortal({ onBackToHome }: SihSkillingPortalProps) {
  // Navigation View State
  const [activeTab, setActiveTab] = useState<'interview' | 'profile' | 'results' | 'dashboard' | 'tech'>('interview');
  
  // Step 1: Language
  const [selectedLang, setSelectedLang] = useState<'hi' | 'en' | 'reg'>('hi');
  const [langConfirmed, setLangConfirmed] = useState(false);

  // Step 2: Voice Interview State
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

  // Selected Recommendation for Details Modal/View
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
        const textToRead = selectedLang === 'hi' ? q.promptHi : q.promptEn;
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

    // Update Profile state synchronously
    setProfile(prev => ({
      ...prev,
      [q.id]: answerValue
    }));

    setSpeechText('');
    setManualInput('');

    if (currentQIndex < skillingQuestions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    } else {
      // Completed all 8 questions! Move to Profile & Recommendations
      setActiveTab('profile');
    }
  };

  // 1-Click Demo Preset Loader for Jury
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 font-sans pb-24">
      
      {/* Top Special SIH Header Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 text-white py-2 px-4 shadow-md text-xs sm:text-sm font-semibold flex items-center justify-between">
        <div className="flex items-center gap-2 max-w-5xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-white text-orange-700 text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
              PM-AJAY GIA Official Portal
            </span>
            <span className="hidden md:inline text-orange-50 font-medium">
              PM-AJAY (GIA Component) — Voice Livelihood Mapping & NSQF Skilling
            </span>
          </div>
          <button 
            onClick={onBackToHome}
            className="flex items-center gap-1 bg-black/20 hover:bg-black/40 px-3 py-1 rounded-full text-xs transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Main Portal
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="border-b border-slate-700/80 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('interview')}>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Mic className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white">Sarkari Sathi</span>
                <span className="text-[10px] bg-orange-500/20 text-orange-300 border border-orange-500/40 px-1.5 py-0.5 rounded font-mono">
                  PM-AJAY Skilling
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">AI Livelihood & NSQF Recommendation Engine</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button 
              onClick={() => setActiveTab('interview')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'interview' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              🎙️ Voice Interview
            </button>
            <button 
              onClick={() => setActiveTab('profile')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'profile' || activeTab === 'results' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              📊 Livelihood Profile
            </button>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'dashboard' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              📈 Program Dashboard
            </button>
          </div>

        </div>
      </header>

      {/* MAIN BODY CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 pt-8">

        {/* 1. HERO BANNER (When on Interview Tab & not started) */}
        {!langConfirmed && activeTab === 'interview' && (
          <div className="animate-fade-in-up">
            
            {/* Hero Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 border border-slate-700/80 p-8 md:p-12 mb-10 shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -mr-30 -mt-30 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -ml-30 -mb-30 pointer-events-none"></div>

              <div className="relative z-10 max-w-3xl">
                
                <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-orange-300 mb-6">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  PM-AJAY Grant-in-Aid (GIA) Component Innovation
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                  “Your Voice. Your Skills. <br />
                  <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                    Your Opportunity.”
                  </span>
                </h1>

                <p className="text-xl font-semibold text-amber-200 mb-4">
                  AI-powered livelihood mapping and skilling guidance for SC beneficiaries under PM-AJAY.
                </p>

                <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-2xl">
                  Talk to Sarkari Sathi in your preferred language. The AI assistant understands your education, 
                  traditional skills, and aspirations to match you with NSQF-aligned training and local employment opportunities.
                </p>

                {/* Workflow Illustration Diagram */}
                <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-4 md:p-5 mb-8">
                  <p className="text-xs uppercase font-mono text-slate-400 mb-3 font-semibold">End-to-End Livelihood Journey:</p>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs md:text-sm font-medium text-slate-200">
                    <div className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-xl border border-slate-700">
                      <span>👤 Rural Citizen</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-orange-400" />
                    <div className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-xl border border-slate-700">
                      <span>🎙️ Voice AI</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-orange-400" />
                    <div className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-xl border border-slate-700">
                      <span>⚡ Skill Gap Analysis</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-orange-400" />
                    <div className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-xl border border-slate-700">
                      <span>🎓 NSQF Training</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-orange-400" />
                    <div className="flex items-center gap-2 bg-orange-500/20 text-orange-300 border border-orange-500/40 px-3 py-2 rounded-xl font-bold">
                      <span>💼 Job / Self-Employment</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button 
                    onClick={() => setLangConfirmed(true)}
                    className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-xl shadow-orange-500/25 transition-all flex items-center justify-center gap-3 hover:-translate-y-0.5"
                  >
                    <Mic className="w-6 h-6 animate-pulse" />
                    🎙️ Talk to Sarkari Sathi
                  </button>
                  
                  <button 
                    onClick={() => {
                      const el = document.getElementById('how-it-works-sec');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-4 rounded-2xl text-base border border-slate-700 transition-all text-center"
                  >
                    How It Works
                  </button>
                </div>

              </div>

            </div>

            {/* Quick PM-AJAY Program Demo Presets Section */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-12">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold text-amber-200">🚀 Sample Beneficiary Profiles (Quick Assessment)</h3>
              </div>
              <p className="text-xs text-amber-100/80 mb-4">
                Click any preset below to instantly load a realistic beneficiary profile and skip speech input during demonstration:
              </p>

              <div className="grid md:grid-cols-3 gap-3">
                {samplePresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLoadPreset(preset.profile)}
                    className="text-left bg-slate-900/80 hover:bg-slate-800 p-4 rounded-xl border border-amber-500/20 transition-all hover:border-amber-500/50 group"
                  >
                    <p className="font-bold text-sm text-white group-hover:text-amber-300 mb-1">{preset.label}</p>
                    <p className="text-xs text-slate-400">{preset.profile.education} • {preset.profile.existingSkills}</p>
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* 2. LANGUAGE SELECTION MODAL / STEP */}
        {langConfirmed && activeTab === 'interview' && (
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            
            {/* Question Progress Header */}
            <div className="mb-6 flex items-center justify-between bg-slate-800/80 px-4 py-3 rounded-xl border border-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-orange-500 text-white font-bold text-xs flex items-center justify-center">
                  {currentQIndex + 1}
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  Question {currentQIndex + 1} of {skillingQuestions.length} — {skillingQuestions[currentQIndex].title}
                </span>
              </div>
              
              {/* Progress bar */}
              <div className="w-24 bg-slate-700 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-orange-500 h-full transition-all duration-300"
                  style={{ width: `${((currentQIndex + 1) / skillingQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Conversational Screen */}
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-6 md:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Voice Avatar & Greeting */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-orange-500/30">
                  🤖
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    Sarkari Sathi Voice Guide
                    {isSpeaking && (
                      <span className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Volume2 className="w-3 h-3 animate-pulse" /> Speaking...
                      </span>
                    )}
                  </h2>
                  
                  <p className="text-xs text-orange-300 font-medium mt-0.5">
                    "No typing required. Just speak naturally."
                  </p>
                </div>
              </div>

              {/* Speech Question Box */}
              <div className="bg-slate-900/90 border border-orange-500/30 rounded-2xl p-6 mb-8 relative">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs uppercase font-mono text-orange-400 font-bold tracking-wider">
                    AI Question #{skillingQuestions[currentQIndex].num}
                  </span>
                  <button 
                    onClick={() => readQuestionTTS(selectedLang === 'hi' ? skillingQuestions[currentQIndex].promptHi : skillingQuestions[currentQIndex].promptEn)}
                    className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded-lg flex items-center gap-1"
                  >
                    <Volume2 className="w-3.5 h-3.5" /> Repeat Voice
                  </button>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                  {selectedLang === 'hi' ? skillingQuestions[currentQIndex].promptHi : skillingQuestions[currentQIndex].promptEn}
                </h3>
                
                <p className="text-sm text-slate-400 italic">
                  {skillingQuestions[currentQIndex].subtextHi}
                </p>
              </div>

              {/* Animated Microphone & Audio Waveform Section */}
              <div className="flex flex-col items-center justify-center py-6 mb-8 bg-slate-900/50 rounded-2xl border border-slate-800">
                
                {/* Microhpne Button */}
                <button
                  onClick={toggleListening}
                  className={`relative flex items-center justify-center w-28 h-28 rounded-full transition-all duration-300 shadow-2xl ${
                    isListening 
                      ? 'bg-gradient-to-br from-red-500 to-red-600 scale-110 shadow-red-500/50' 
                      : 'bg-gradient-to-br from-orange-500 to-amber-500 hover:scale-105 shadow-orange-500/30'
                  }`}
                >
                  <Mic className={`w-12 h-12 text-white ${isListening ? 'animate-pulse' : ''}`} />
                  {isListening && (
                    <span className="absolute w-full h-full rounded-full border-4 border-red-400 animate-ping opacity-75"></span>
                  )}
                </button>

                {/* Animated Waveform Visualizer */}
                <div className="flex items-center gap-1.5 mt-6 h-8">
                  {[40, 70, 30, 90, 50, 80, 40, 60, 100, 50, 70, 30].map((h, i) => (
                    <div 
                      key={i}
                      className={`w-1.5 rounded-full transition-all duration-150 ${
                        isListening ? 'bg-red-400 animate-bounce' : 'bg-slate-700'
                      }`}
                      style={{ 
                        height: isListening ? `${Math.max(12, (h * Math.random()))}px` : '8px',
                        animationDelay: `${i * 0.08}s`
                      }}
                    ></div>
                  ))}
                </div>

                <p className="mt-3 text-sm font-semibold text-slate-300">
                  {isListening ? "🔴 Listening... Speak clearly into your mic" : "Click Microphone to Speak Answer"}
                </p>

                {/* Recognized Speech Output Display */}
                {speechText && (
                  <div className="mt-4 bg-orange-500/10 border border-orange-500/40 p-4 rounded-xl max-w-md text-center">
                    <p className="text-xs text-orange-300 font-mono mb-1">Recognized Speech:</p>
                    <p className="text-base text-white font-bold">"{speechText}"</p>
                    <button
                      onClick={() => handleSaveAnswer(speechText)}
                      className="mt-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors"
                    >
                      Confirm Answer & Next →
                    </button>
                  </div>
                )}
              </div>

              {/* Sample Quick Option Chips */}
              <div className="mb-6">
                <p className="text-xs uppercase font-mono text-slate-400 mb-3 font-semibold">
                  Or select a sample answer:
                </p>
                <div className="flex flex-wrap gap-2">
                  {skillingQuestions[currentQIndex].optionsHi.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSaveAnswer(opt)}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium px-4 py-2.5 rounded-xl border border-slate-700 transition-all hover:border-orange-500/50"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Text Input Fallback (Demo Reliability) */}
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-semibold">Stuck with microphone?</span>
                  <button 
                    onClick={() => setShowManual(!showManual)}
                    className="text-xs text-orange-400 hover:text-orange-300 underline font-medium"
                  >
                    {showManual ? "Hide Typing Box" : "⌨️ Type your answer instead"}
                  </button>
                </div>

                {showManual && (
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={manualInput}
                      onChange={(e) => setManualInput(e.target.value)}
                      placeholder="Type your answer here..."
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
                    />
                    <button
                      disabled={!manualInput}
                      onClick={() => handleSaveAnswer(manualInput)}
                      className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

        {/* 3. BENEFICIARY PROFILE & SKILL ANALYSIS VIEW */}
        {(activeTab === 'profile' || activeTab === 'results') && (
          <div className="space-y-10 animate-fade-in-up">
            
            {/* Header Profile Title */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-2">
                  PM-AJAY GIA Beneficiary Profile
                </div>
                <h2 className="text-3xl font-extrabold text-white">Your Livelihood Profile</h2>
                <p className="text-sm text-slate-400 mt-1">Generated from your AI voice interview & skill background</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700 flex items-center gap-2"
                >
                  <Edit3 className="w-4 h-4" />
                  {isEditingProfile ? "Save Profile" : "Edit Profile"}
                </button>

                <button
                  onClick={() => {
                    setActiveTab('interview');
                    setLangConfirmed(true);
                    setCurrentQIndex(0);
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-lg shadow-orange-500/20"
                >
                  <RefreshCw className="w-4 h-4" /> Re-take Interview
                </button>
              </div>
            </div>

            {/* Profile Grid Cards */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <p className="text-xs uppercase font-mono text-slate-400 mb-1 font-semibold">Education</p>
                <p className="text-base font-bold text-white">{profile.education}</p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <p className="text-xs uppercase font-mono text-slate-400 mb-1 font-semibold">Current Occupation</p>
                <p className="text-base font-bold text-white">{profile.currentOccupation}</p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <p className="text-xs uppercase font-mono text-slate-400 mb-1 font-semibold">Traditional Work</p>
                <p className="text-base font-bold text-white">{profile.traditionalOccupation}</p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <p className="text-xs uppercase font-mono text-slate-400 mb-1 font-semibold">Existing Skills</p>
                <p className="text-base font-bold text-orange-300">{profile.existingSkills}</p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <p className="text-xs uppercase font-mono text-slate-400 mb-1 font-semibold">Career Interest</p>
                <p className="text-base font-bold text-amber-300">{profile.interest}</p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <p className="text-xs uppercase font-mono text-slate-400 mb-1 font-semibold">Work Preference</p>
                <p className="text-base font-bold text-white">{profile.employmentPreference}</p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <p className="text-xs uppercase font-mono text-slate-400 mb-1 font-semibold">Mobility Limit</p>
                <p className="text-base font-bold text-white">{profile.mobility}</p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <p className="text-xs uppercase font-mono text-slate-400 mb-1 font-semibold">Location</p>
                <p className="text-base font-bold text-white">{profile.district}, {profile.state}</p>
              </div>
            </div>

            {/* 4. SKILL GAP ANALYSIS SECTION */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 md:p-8 shadow-xl">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Understanding Your Livelihood & Skill Gaps</h3>
                  <p className="text-xs text-slate-400">Diagnostic mapping of your existing abilities vs required industry standards</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Card 1: Current Situation */}
                <div className="bg-slate-900/80 border border-slate-700/80 p-5 rounded-2xl">
                  <p className="text-xs uppercase font-mono text-orange-400 font-bold mb-2">1. Current Situation</p>
                  <p className="text-sm text-slate-200 font-semibold mb-3">
                    {profile.currentOccupation} with practical experience in {profile.existingSkills}.
                  </p>
                  <p className="text-xs text-slate-400">
                    Traditional background in {profile.traditionalOccupation} provides strong physical & practical adaptability.
                  </p>
                </div>

                {/* Card 2: Strengths */}
                <div className="bg-slate-900/80 border border-slate-700/80 p-5 rounded-2xl">
                  <p className="text-xs uppercase font-mono text-green-400 font-bold mb-2">2. Key Strengths</p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Existing practical hands-on experience in basic repair</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>High motivation for technical & solar field learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Willingness to commute up to {profile.mobility}</span>
                    </li>
                  </ul>
                </div>

                {/* Card 3: Skill Gaps */}
                <div className="bg-slate-900/80 border border-slate-700/80 p-5 rounded-2xl">
                  <p className="text-xs uppercase font-mono text-amber-400 font-bold mb-2">3. Identified Skill Gaps</p>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300">Industrial Electrical Safety</span>
                        <span className="text-amber-400 font-bold">Needs Certification</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-400 h-full w-[40%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300">Solar Grid Calibration</span>
                        <span className="text-amber-400 font-bold">Needs Practical Lab</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-400 h-full w-[30%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* 5. NSQF RECOMMENDED PATHWAYS */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-extrabold text-white">Recommended Skill Pathways</h3>
                  <p className="text-sm text-slate-400">Matched specifically to your profile & local PM-AJAY GIA training centers</p>
                </div>

                {/* Match Disclaimer Warning */}
                <div className="hidden lg:flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs px-4 py-2 rounded-xl">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Potential Match — Final eligibility verified per official guidelines</span>
                </div>
              </div>

              {/* Pathway Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {recommendations.map((pathway) => (
                  <div 
                    key={pathway.id}
                    className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6 hover:border-orange-500/50 transition-all shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Top Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 text-2xl flex items-center justify-center">
                            {pathway.icon}
                          </div>
                          <div>
                            <span className="bg-orange-500/20 text-orange-300 border border-orange-500/40 text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded">
                              NSQF Level {pathway.nsqfLevel} Pathway
                            </span>
                            <h4 className="text-xl font-bold text-white mt-1">{pathway.name}</h4>
                          </div>
                        </div>

                        {/* Match score Badge */}
                        <div className="text-right flex-shrink-0">
                          <span className="text-2xl font-black text-orange-400">{pathway.matchScore}%</span>
                          <p className="text-[10px] text-slate-400 font-semibold uppercase">Match Score</p>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {pathway.description}
                      </p>

                      {/* Why Recommended */}
                      <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3.5 mb-4">
                        <p className="text-xs font-bold text-amber-300 mb-1">Why Recommended?</p>
                        <p className="text-xs text-slate-300">{pathway.whyRecommended}</p>
                      </div>

                      {/* Key Outcomes */}
                      <div className="space-y-2 mb-6">
                        <p className="text-xs uppercase font-mono text-slate-400 font-semibold">Livelihood Outcomes:</p>
                        {pathway.livelihoodOutcomes.map((out, oIdx) => (
                          <div key={oIdx} className="bg-slate-800/90 p-2.5 rounded-lg border border-slate-700/60 flex items-center justify-between text-xs">
                            <span className="font-semibold text-white">{out.title}</span>
                            <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded font-mono">
                              {out.type}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>

                    <button
                      onClick={() => setSelectedPathway(pathway)}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                    >
                      View Livelihood Details & Documents →
                    </button>

                  </div>
                ))}
              </div>
            </div>

            {/* 6. PERSONALIZED LIVELIHOOD ROADMAP */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6 md:p-10 shadow-2xl">
              
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs uppercase font-mono bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full font-bold">
                  Strategic Career Timeline
                </span>
                <h3 className="text-3xl font-extrabold text-white mt-3">Your Suggested Livelihood Roadmap</h3>
                <p className="text-xs text-slate-400 mt-1">A step-by-step pathway from your existing skills to sustained enterprise & employment</p>
              </div>

              {/* Timeline Steps */}
              <div className="grid md:grid-cols-6 gap-3 relative">
                {[
                  { step: "1", title: "Current Skills", desc: "Recognize existing experience" },
                  { step: "2", title: "Skill Gap", desc: "Identify safety & technical gaps" },
                  { step: "3", title: "NSQF Training", desc: "Free 3-month PM-AJAY GIA course" },
                  { step: "4", title: "Certification", desc: "Sector Skill Council Certificate" },
                  { step: "5", title: "Local Job", desc: "Apprenticeship or employment" },
                  { step: "6", title: "Self Enterprise", desc: "Mudra loan & business setup" }
                ].map((item, index) => (
                  <div key={index} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 text-center relative group hover:border-orange-500/50 transition-all">
                    <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-md">
                      {item.step}
                    </div>
                    <h4 className="text-xs font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-[10px] text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* 7. GIA PROBLEM VS SOLUTION CARD MATRIX (FOR PROGRAM EVALUATION) */}
            <div className="id-how-it-works-sec bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl">
              
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-2">
                  PM-AJAY GIA Component Solutions
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">How Sarkari Sathi Solves GIA PM-AJAY Challenges</h3>
                <p className="text-xs text-slate-400 mt-1">Directly addressing key operational gaps identified in government skilling programs</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {giaProblemSolutions.map((item, idx) => (
                  <div key={idx} className="bg-slate-800/60 border border-slate-700/70 p-5 rounded-2xl">
                    <div className="mb-3">
                      <span className="text-[10px] uppercase font-mono text-red-400 font-bold bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                        Problem #{idx + 1}
                      </span>
                      <p className="text-xs font-bold text-slate-200 mt-1">{item.problemTitle}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.problemDesc}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-700/60">
                      <span className="text-[10px] uppercase font-mono text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                        Sarkari Sathi Solution
                      </span>
                      <p className="text-xs font-bold text-amber-300 mt-1">{item.solutionTitle}</p>
                      <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">{item.solutionDesc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* 8. RURAL & LOW CONNECTIVITY CHANNELS (PLANNED CHANNELS) */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 md:p-8">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Built for Rural & Low-Connectivity Environments</h3>
                <p className="text-xs text-slate-400">Planned deployment channels to ensure zero-barrier access across villages</p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                
                <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-3">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">📞 IVR Toll-Free</h4>
                  <p className="text-xs text-slate-400 mb-2">For feature phones without internet</p>
                  <span className="text-[10px] bg-slate-800 text-amber-300 px-2 py-0.5 rounded font-mono">Future Channel</span>
                </div>

                <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 text-center">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-3">
                    <Radio className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">🎙️ WhatsApp Voice Bot</h4>
                  <p className="text-xs text-slate-400 mb-2">Send voice notes on WhatsApp</p>
                  <span className="text-[10px] bg-slate-800 text-amber-300 px-2 py-0.5 rounded font-mono">Future Channel</span>
                </div>

                <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 text-center">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">📱 Lightweight Web</h4>
                  <p className="text-xs text-slate-400 mb-2">Works seamlessly on 2G/3G networks</p>
                  <span className="text-[10px] bg-green-500/20 text-green-300 px-2 py-0.5 rounded font-mono font-bold">Implemented</span>
                </div>

                <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 text-center">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">🖥️ CSC Kiosk Mode</h4>
                  <p className="text-xs text-slate-400 mb-2">Assisted access at Gram Panchayat</p>
                  <span className="text-[10px] bg-slate-800 text-amber-300 px-2 py-0.5 rounded font-mono">Future Channel</span>
                </div>

              </div>

            </div>

            {/* 9. SECURITY & TRUST SECTION */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
              <div className="flex items-center gap-3">
                <Lock className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">Security & Trust Assurance</h4>
                  <p className="text-slate-400">Only minimal required beneficiary details are collected. Data is encrypted according to Digital Personal Data Protection standards.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 font-mono">
                  🔐 256-bit Encryption
                </span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 font-mono">
                  🛡️ DPDP Compliant
                </span>
              </div>
            </div>

          </div>
        )}

        {/* 10. PROGRAM DASHBOARD (TAB === 'dashboard') */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-fade-in-up">
            
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6 md:p-8">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-2">
                PM-AJAY District Analytics (DEMO DATA)
              </div>
              <h2 className="text-3xl font-extrabold text-white">Program & Skilling Dashboard</h2>
              <p className="text-sm text-slate-400 mt-1">Real-time metrics tracking voice interviews, recommendations, and local employment outcomes</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <p className="text-xs uppercase font-mono text-slate-400 mb-1">Beneficiaries Profiled</p>
                <p className="text-3xl font-black text-white">1,240</p>
                <p className="text-[10px] text-green-400 font-bold mt-1">↑ 18% this month</p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <p className="text-xs uppercase font-mono text-slate-400 mb-1">Training Matches</p>
                <p className="text-3xl font-black text-orange-400">980</p>
                <p className="text-[10px] text-orange-300 font-bold mt-1">NSQF Level 3 & 4</p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <p className="text-xs uppercase font-mono text-slate-400 mb-1">Job Matches</p>
                <p className="text-3xl font-black text-amber-400">620</p>
                <p className="text-[10px] text-amber-300 font-bold mt-1">Local Vendors Linked</p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl">
                <p className="text-xs uppercase font-mono text-slate-400 mb-1">Self-Employment</p>
                <p className="text-3xl font-black text-green-400">360</p>
                <p className="text-[10px] text-green-300 font-bold mt-1">Mudra Loan Pipeline</p>
              </div>
            </div>

            {/* Visual Skill Demand Distribution Bars */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 md:p-8 space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Most Requested Skill Pathways (District Bhopal & Sehore)</h3>

              {[
                { title: "Assistant Electrician (NSQF 4)", count: 420, percent: 85, color: "bg-orange-500" },
                { title: "Solar PV Rooftop Technician (NSQF 4)", count: 340, percent: 70, color: "bg-amber-500" },
                { title: "Automotive & EV Technician (NSQF 3)", count: 260, percent: 55, color: "bg-blue-500" },
                { title: "Digital Kiosk Operator (NSQF 4)", count: 220, percent: 45, color: "bg-purple-500" }
              ].map((bar, bIdx) => (
                <div key={bIdx}>
                  <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1">
                    <span>{bar.title}</span>
                    <span>{bar.count} Beneficiaries ({bar.percent}%)</span>
                  </div>
                  <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden">
                    <div className={`${bar.color} h-full rounded-full`} style={{ width: `${bar.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </main>

      {/* RECOMMENDATION DETAILS MODAL / OVERLAY */}
      {selectedPathway && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fade-in-up">
            
            <button 
              onClick={() => setSelectedPathway(null)}
              className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 text-slate-300 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{selectedPathway.icon}</span>
              <div>
                <span className="bg-orange-500/20 text-orange-300 text-xs px-2.5 py-0.5 rounded font-mono font-bold">
                  NSQF Level {selectedPathway.nsqfLevel} • {selectedPathway.sector}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedPathway.name}</h3>
              </div>
            </div>

            <div className="space-y-6 text-xs text-slate-300">
              
              <div>
                <h4 className="font-bold text-slate-200 uppercase font-mono text-[10px] mb-1">Course Duration & Requirements</h4>
                <p className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                  ⏱️ <strong>Duration:</strong> {selectedPathway.duration} | 🎓 <strong>Education:</strong> {selectedPathway.minEducation}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-amber-300 uppercase font-mono text-[10px] mb-1">PM-AJAY GIA Component Benefits</h4>
                <ul className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl space-y-1.5 text-amber-200 font-medium">
                  {selectedPathway.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-200 uppercase font-mono text-[10px] mb-1">Required Documents Checklist</h4>
                <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 space-y-1">
                  {selectedPathway.requiredDocuments.map((doc, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-200 uppercase font-mono text-[10px] mb-1">Opportunities Near You</h4>
                <div className="space-y-2">
                  {selectedPathway.localOpportunities.map((op, oIdx) => (
                    <div key={oIdx} className="bg-slate-800/60 p-3 rounded-xl border border-slate-700 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-white">{op.title}</p>
                        <p className="text-[10px] text-slate-400">📍 {op.location}</p>
                      </div>
                      <span className="text-green-400 font-mono font-bold bg-green-500/10 px-2.5 py-1 rounded">
                        {op.avgIncome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[10px] text-slate-400 font-mono">
                Official Application Channel: PM-AJAY GIA District Officer / State Skill Portal
              </span>
              <button 
                onClick={() => {
                  alert("Application Guidance Generated! Your application documents list and nearby training center contact details have been prepared.");
                  setSelectedPathway(null);
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-lg shadow-orange-500/20"
              >
                Get Application Guidance →
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
