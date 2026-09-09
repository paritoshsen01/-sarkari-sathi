import React from 'react';
import { Mic, FileSearch, HelpCircle, ShieldAlert } from 'lucide-react';
import { type LanguageCode, getTranslation } from '../data/languages';
import logoImg from '../assets/logo.png';

interface HomeProps {
  lang: LanguageCode;
  onStartVoice: () => void;
  onStartManual: () => void;
  onStartNeedAssistant: () => void;
  onStartScamVerification: () => void;
  onStartSihSkilling: () => void;
}

export function Home({ lang, onStartVoice, onStartManual, onStartNeedAssistant, onStartScamVerification, onStartSihSkilling }: HomeProps) {
  const t = getTranslation(lang);
  const content = t.home;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* PM-AJAY GIA Special Feature Banner */}
      <div 
        onClick={onStartSihSkilling}
        className="mb-12 bg-white rounded-3xl p-2 pr-6 border-2 border-emerald-100 shadow-xl shadow-emerald-500/5 cursor-pointer hover:-translate-y-1 transition-all duration-300 group flex items-center justify-between overflow-hidden relative"
      >
        {/* Glow effect behind banner */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-50 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-inner m-1 shrink-0">
            <Mic className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-emerald-100 text-emerald-800 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">
                {(content as any).pmAjayBanner?.badge || 'PM-AJAY Special Feature'}
              </span>
              <span className="bg-amber-100 text-amber-800 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">
                {(content as any).pmAjayBanner?.subBadge || 'GIA Component Skilling'}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
              {(content as any).pmAjayBanner?.title || 'AI Voice Assistant for Livelihood & NSQF Skilling'}
            </h3>
            <p className="text-sm text-slate-500 font-medium hidden md:block">
              {(content as any).pmAjayBanner?.desc || '“Your Voice. Your Skills. Your Opportunity.” — Voice-first livelihood mapping for SC beneficiaries.'}
            </p>
          </div>
        </div>
        
        <div className="relative z-10 hidden sm:block">
          <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold px-6 py-3 rounded-full text-sm whitespace-nowrap shadow-lg shadow-emerald-600/20 flex items-center gap-2 group-hover:translate-x-1 transition-all">
            <span>{(content as any).pmAjayBanner?.cta || 'PM-AJAY Voice Assistant 🎙️'}</span>
          </button>
        </div>
      </div>

      <div className="text-center mb-16 mt-8 animate-fade-in-up flex flex-col items-center">
        <div className="w-24 h-24 mb-6 shadow-2xl rounded-3xl overflow-hidden bg-white border border-slate-100">
          <img src={logoImg} alt="AJAY Sathi Logo" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text">
          AJAY Sathi
        </h1>
        <p className="text-xl md:text-2xl text-primary-600 font-semibold mb-6">
          {content.tagline}
        </p>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          {content.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button 
            onClick={onStartVoice}
            className="flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl hover:shadow-primary-500/30 hover-lift w-full sm:w-auto justify-center"
          >
            <Mic className="w-6 h-6 animate-pulse" />
            {content.startVoiceCTA}
          </button>
          <button 
            onClick={onStartManual}
            className="flex items-center gap-3 glass-panel text-slate-700 px-8 py-4 rounded-full text-lg font-semibold transition-all hover-lift w-full sm:w-auto justify-center"
          >
            {content.manualCTA}
          </button>
        </div>
      </div>


      <div className="glass-panel rounded-3xl p-8 md:p-12 mb-16 text-center animate-fade-in-up border-2 border-primary-100 relative overflow-hidden" style={{ animationDelay: '100ms' }}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-200/30 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <h2 className="text-3xl font-bold text-slate-800 mb-4 relative z-10">{content.needTitle}</h2>
        <p className="text-lg text-slate-600 mb-8 relative z-10 max-w-2xl mx-auto">
          {content.needSubtitle}
        </p>
        
        <button 
          onClick={onStartNeedAssistant}
          className="relative z-10 inline-flex items-center gap-3 bg-white border border-primary-200 text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover-lift"
        >
          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
            <Mic className="w-5 h-5 text-primary-600" />
          </div>
          {content.needCTA}
        </button>
      </div>

      <div className="bg-red-50/80 border border-red-200 rounded-3xl p-6 md:p-8 mb-16 animate-fade-in-up hover-lift cursor-pointer flex flex-col sm:flex-row items-center gap-6 shadow-sm" onClick={onStartScamVerification}>
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <div className="text-center sm:text-left flex-1">
          <h2 className="text-2xl font-bold text-red-800 mb-2">{content.scamCheckTitle}</h2>
          <p className="text-red-700 font-medium">{content.scamCheckDesc}</p>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold whitespace-nowrap shadow-md transition-colors">
          {content.scamCheckCTA}
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        <div className="glass-panel p-6 md:p-8 rounded-3xl text-center hover-lift">
          <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Mic className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">{content.features[0].title}</h3>
          <p className="text-slate-600 font-medium">{content.features[0].desc}</p>
        </div>
        
        <div className="glass-panel p-6 md:p-8 rounded-3xl text-center hover-lift" style={{ animationDelay: '100ms' }}>
          <div className="w-14 h-14 bg-secondary-50 text-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <FileSearch className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">{content.features[1].title}</h3>
          <p className="text-slate-600 font-medium">{content.features[1].desc}</p>
        </div>

        <div className="glass-panel p-6 md:p-8 rounded-3xl text-center hover-lift" style={{ animationDelay: '200ms' }}>
          <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <HelpCircle className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">{content.features[2].title}</h3>
          <p className="text-slate-600 font-medium">{content.features[2].desc}</p>
        </div>
      </div>

      <div className="glass-panel p-6 md:p-10 rounded-[2.5rem] text-center mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-8">{content.howItWorks}</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
          {content.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-3 z-10 relative">
                {index + 1}
              </div>
              <span className="font-medium text-slate-700">{step}</span>
              {index < content.steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-1/2 w-full h-0.5 bg-slate-200" style={{ width: 'calc(100% + 3rem)' }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
