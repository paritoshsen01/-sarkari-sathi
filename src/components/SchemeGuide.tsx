import React, { useState, useEffect } from 'react';
import { Play, Pause, Square, ChevronRight, ChevronLeft, Mic, X } from 'lucide-react';
import { type LanguageCode } from '../data/languages';
import { type Scheme } from '../data/schemes';

interface SchemeGuideProps {
  scheme: Scheme;
  lang: LanguageCode;
  onClose: () => void;
}

export function SchemeGuide({ scheme, lang, onClose }: SchemeGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Get the steps. Fallback to Hindi if the specific rural dialect isn't explicitly defined, or English as last resort.
  const steps = scheme.guideSteps[lang] || scheme.guideSteps['hi'] || scheme.guideSteps['en'];

  useEffect(() => {
    // Cancel any ongoing speech when component unmounts
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speakStep = (stepIndex: number) => {
    window.speechSynthesis.cancel();
    
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(steps[stepIndex]);
      const langMap: Record<string, string> = {
        en: 'en-IN', hi: 'hi-IN', bun: 'hi-IN', cg: 'hi-IN', sat: 'hi-IN', spv: 'or-IN',
        mr: 'mr-IN', bn: 'bn-IN', te: 'te-IN', ta: 'ta-IN', gu: 'gu-IN', bho: 'hi-IN', mai: 'hi-IN'
      };
      
      // If we fell back to Hindi, make sure the voice is Hindi. If we fell back to English, use English.
      let activeLang = lang;
      if (!scheme.guideSteps[lang]) {
        activeLang = scheme.guideSteps['hi'] ? 'hi' : 'en';
      }
      
      utterance.lang = langMap[activeLang] || 'hi-IN';
      
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      stopSpeaking();
    } else {
      speakStep(currentStep);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      const next = currentStep + 1;
      setCurrentStep(next);
      speakStep(next);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      const prev = currentStep - 1;
      setCurrentStep(prev);
      speakStep(prev);
    }
  };

  // Start reading automatically when opened
  useEffect(() => {
    speakStep(0);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in-up">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-primary-600 p-4 md:p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Mic className="w-6 h-6 animate-pulse" />
            <h2 className="text-xl font-bold">AI Application Guide</h2>
          </div>
          <button 
            onClick={() => { stopSpeaking(); onClose(); }}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-5 md:p-8">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-slate-500 font-medium uppercase tracking-wider text-sm mb-2">
              {scheme.name}
            </h3>
            <div className="text-slate-400 font-medium mb-6">
              Step {currentStep + 1} of {steps.length}
            </div>
            
            <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-relaxed min-h-[120px] flex items-center justify-center">
              "{steps[currentStep]}"
            </p>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mb-10">
            {steps.map((_, idx) => (
              <div 
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentStep ? 'w-8 bg-primary-600' : 'w-2 bg-slate-200'
                }`}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <button 
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="p-4 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button 
              onClick={handlePlayPause}
              className="p-6 rounded-full bg-primary-600 text-white hover:bg-primary-700 shadow-xl hover:shadow-2xl transition-all hover-lift"
            >
              {isPlaying ? <Square className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
            </button>

            <button 
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className="p-4 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
