import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, CheckCircle2, FileText, Info, Users, Mic, Volume2, Square } from 'lucide-react';
import { type LanguageCode, languages } from '../data/languages';
import { type Scheme } from '../data/schemes';
import { SchemeGuide } from './SchemeGuide';

interface SchemeDetailsProps {
  lang: LanguageCode;
  scheme: Scheme;
  onBack: () => void;
}

export function SchemeDetails({ lang, scheme, onBack }: SchemeDetailsProps) {
  const content = languages[lang].details;
  const [showGuide, setShowGuide] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [checkedDocs, setCheckedDocs] = useState<number[]>([]);

  const toggleDoc = (idx: number) => {
    setCheckedDocs(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const docProgress = scheme.documents.length > 0 
    ? Math.round((checkedDocs.length / scheme.documents.length) * 100) 
    : 100;

  const readDetails = () => {
    if (!('speechSynthesis' in window)) return;
    
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    const textToRead = `${scheme.name}. ${content.whatIsIt}: ${scheme.whatIsIt} ${content.whoIsEligible}: ${scheme.whoIsEligible} ${content.benefits}: ${scheme.benefit}`;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    const langMap: Record<string, string> = {
      en: 'en-IN', hi: 'hi-IN', bun: 'hi-IN', cg: 'hi-IN', sat: 'hi-IN', spv: 'or-IN',
      mr: 'mr-IN', bn: 'bn-IN', te: 'te-IN', ta: 'ta-IN', gu: 'gu-IN', bho: 'hi-IN', mai: 'hi-IN'
    };
    utterance.lang = langMap[lang] || 'hi-IN';
    
    utterance.onstart = () => setIsReading(true);
    utterance.onend = () => setIsReading(false);
    utterance.onerror = () => setIsReading(false);

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-primary-600 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          {content.back}
        </button>
        
        <button 
          onClick={readDetails}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
            isReading 
              ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100' 
              : 'bg-primary-50 text-primary-700 border-primary-200 hover:bg-primary-100'
          }`}
        >
          {isReading ? (
            <>
              <Square className="w-4 h-4 fill-current" />
              Stop Reading
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4" />
              Listen to Details
            </>
          )}
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-50 p-5 md:p-8 border-b border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-3xl flex-shrink-0">
              {scheme.icon}
            </div>
            <div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-white text-slate-600 border border-slate-200 inline-block mb-2">
                {scheme.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">{scheme.name}</h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-8 space-y-6 md:space-y-8">
          
          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 mb-3">
              <Info className="w-5 h-5 text-primary-600" />
              {content.whatIsIt}
            </h2>
            <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl">
              {scheme.whatIsIt}
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 mb-3">
              <Users className="w-5 h-5 text-primary-600" />
              {content.whoIsEligible}
            </h2>
            <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl">
              {scheme.whoIsEligible}
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 mb-3">
              <CheckCircle2 className="w-5 h-5 text-primary-600" />
              {content.benefits}
            </h2>
            <p className="text-slate-700 leading-relaxed bg-primary-50 p-4 rounded-xl border border-primary-100">
              {scheme.benefit}
            </p>
          </section>

          <section>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                <FileText className="w-5 h-5 text-primary-600" />
                {content.documents}
              </h2>
              {scheme.documents.length > 0 && (
                <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                  <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${docProgress === 100 ? 'bg-green-500' : 'bg-primary-500'}`}
                      style={{ width: `${docProgress}%` }}
                    />
                  </div>
                  <span className={`text-sm font-bold ${docProgress === 100 ? 'text-green-600' : 'text-primary-700'}`}>
                    {docProgress === 100 ? 'Ready!' : `${docProgress}%`}
                  </span>
                </div>
              )}
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {scheme.documents.map((doc, idx) => {
                const isChecked = checkedDocs.includes(idx);
                return (
                  <li 
                    key={idx} 
                    onClick={() => toggleDoc(idx)}
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      isChecked 
                        ? 'bg-green-50 border-green-200 shadow-sm' 
                        : 'bg-white border-slate-200 hover:border-primary-300 hover:shadow-sm hover:bg-slate-50'
                    }`}
                  >
                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                      isChecked ? 'bg-green-500 border-green-500' : 'border-slate-300 bg-white'
                    }`}>
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <span className={`text-sm md:text-base transition-colors ${isChecked ? 'text-green-800 font-medium' : 'text-slate-700'}`}>
                      {doc}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          <div className="border-t border-slate-200 pt-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 text-center">
              {content.howToApply}
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-4 mb-8">
              {content.applySteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center max-w-[200px]">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-lg mb-3">
                    {idx + 1}
                  </div>
                  <p className="text-slate-600 text-sm font-medium">{step}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setShowGuide(true)}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                <Mic className="w-5 h-5" />
                Start AI Guide
              </button>
              <a 
                href={scheme.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                <ExternalLink className="w-5 h-5" />
                {content.visitPortal}
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-6 italic">
              You will be redirected to: {scheme.link}
            </p>
          </div>

        </div>
      </div>
      
      {showGuide && (
        <SchemeGuide scheme={scheme} lang={lang} onClose={() => setShowGuide(false)} />
      )}
    </div>
  );
}
