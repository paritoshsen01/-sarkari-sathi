import React, { useState, useEffect } from 'react';
import { Play, Pause, Square, ChevronRight, ChevronLeft, Mic, X } from 'lucide-react';
import { type LanguageCode } from '../data/languages';

interface PortalApplicationGuideProps {
  steps: string[];
  lang: LanguageCode;
  onClose: () => void;
}

export function PortalApplicationGuide({ steps, lang, onClose }: PortalApplicationGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Cancel any ongoing speech when component unmounts
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speakStep = (stepIndex: number) => {
    window.speechSynthesis.cancel();
    
    if ('speechSynthesis' in window && steps[stepIndex]) {
      const utterance = new SpeechSynthesisUtterance(steps[stepIndex]);
      const langMap: Record<string, string> = {
        en: 'en-IN', hi: 'hi-IN', bun: 'hi-IN', cg: 'hi-IN', sat: 'hi-IN', spv: 'or-IN',
        mr: 'mr-IN', bn: 'bn-IN', te: 'te-IN', ta: 'ta-IN', gu: 'gu-IN', bho: 'hi-IN', mai: 'hi-IN'
      };
      
      utterance.lang = langMap[lang] || 'hi-IN';
      
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

  if (!steps || steps.length === 0) return null;

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

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col items-center text-center">
            
            {/* Step Counter */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 font-bold text-sm mb-6 border border-primary-200 shadow-sm">
              Step {currentStep + 1} of {steps.length}
            </div>

            {/* AI Avatar / Audio Visualizer representation */}
            <div className="relative mb-8">
              <div className={`w-24 h-24 rounded-full border-4 border-slate-50 flex items-center justify-center shadow-lg transition-all duration-500 ${isPlaying ? 'bg-primary-500 scale-110 shadow-primary-500/50' : 'bg-slate-200 grayscale'}`}>
                {isPlaying ? (
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-8 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-12 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-6 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    <span className="w-1.5 h-10 bg-white rounded-full animate-bounce" style={{ animationDelay: '450ms' }}></span>
                  </div>
                ) : (
                  <Mic className="w-10 h-10 text-slate-400" />
                )}
              </div>
              {/* Ripple Effect when playing */}
              {isPlaying && (
                <div className="absolute inset-0 rounded-full border-4 border-primary-400 animate-ping opacity-75"></div>
              )}
            </div>

            {/* Subtitles / Text */}
            <div className="min-h-[120px] flex items-center justify-center w-full bg-slate-50 rounded-2xl p-6 border-2 border-slate-100 relative">
              <p className="text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed max-w-lg">
                {steps[currentStep]}
              </p>
            </div>
            
          </div>
        </div>

        {/* Controls Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200">
          <div className="flex items-center justify-between max-w-md mx-auto">
            <button 
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`p-3 rounded-full flex items-center justify-center transition-colors ${currentStep === 0 ? 'text-slate-300' : 'text-slate-600 hover:bg-slate-200'}`}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button 
              onClick={handlePlayPause}
              className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-105 active:scale-95 ${
                isPlaying 
                  ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-500/30' 
                  : 'bg-primary-600 hover:bg-primary-700 text-white shadow-primary-600/30'
              }`}
            >
              {isPlaying ? <Square className="w-6 h-6 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
            </button>

            <button 
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className={`p-3 rounded-full flex items-center justify-center transition-colors ${currentStep === steps.length - 1 ? 'text-slate-300' : 'text-slate-600 hover:bg-slate-200'}`}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
