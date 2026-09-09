import React, { useMemo, useState } from 'react';
import { ArrowRight, AlertCircle, Volume2, Square } from 'lucide-react';
import { type LanguageCode, getTranslation } from '../data/languages';
import { prototypeSchemes, type Scheme } from '../data/schemes';
import { calculateDetailedScores } from '../utils/aiMatching';

interface ResultsProps {
  lang: LanguageCode;
  answers: Record<number, string>;
  forcedSchemes?: Scheme[] | null;
  onSelectScheme: (scheme: Scheme) => void;
}

export function Results({ lang, answers, forcedSchemes, onSelectScheme }: ResultsProps) {
  const t = getTranslation(lang);
  const content = t.results;
  const [isReading, setIsReading] = useState(false);
  
  const matchedSchemes = useMemo(() => {
    if (forcedSchemes && forcedSchemes.length > 0) {
      return forcedSchemes;
    }
    
    return calculateDetailedScores(answers);
  }, [answers, forcedSchemes]);

  const readSchemes = () => {
    if (!('speechSynthesis' in window)) return;
    
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    const introText = content.header + ". " + content.subtitle + ". ";
    const schemesText = matchedSchemes.map((s, i) => `${i + 1}. ${s.name}. ${s.benefit}`).join('. ');
    const textToRead = introText + schemesText;

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

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{content.header}</h2>
        <p className="text-lg text-slate-600 mb-6">{content.subtitle}</p>
        
        <button 
          onClick={readSchemes}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all shadow-md ${
            isReading 
              ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100' 
              : 'bg-primary-50 text-primary-700 border border-primary-200 hover:bg-primary-100'
          }`}
        >
          {isReading ? (
            <>
              <Square className="w-5 h-5 fill-current" />
              {content.stopReading}
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5" />
              {content.listenResults}
            </>
          )}
        </button>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-start gap-3">
        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-amber-800 text-sm md:text-base">
          <strong>{content.disclaimerLabel}</strong> {content.disclaimer}
        </p>
      </div>

      <div className="space-y-4">
        {matchedSchemes.length === 0 ? (
          <div className="glass-panel p-12 text-center rounded-3xl">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">{content.noSchemesFound}</h3>
            <p className="text-slate-600">{content.tryDifferent}</p>
          </div>
        ) : (
          matchedSchemes.map((scheme) => (
            <div 
              key={scheme.id} 
              className="glass-panel rounded-2xl p-5 md:p-6 hover-lift"
            >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-2xl flex-shrink-0">
                  {scheme.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-slate-900">{scheme.name}</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                      {scheme.category}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-3">{scheme.benefit}</p>
                  
                  {scheme.score !== undefined && (
                    <div className="flex items-center gap-2">
                      {scheme.score >= 80 ? (
                        <span className="inline-flex items-center gap-1 text-green-700 bg-green-50 px-2.5 py-1 rounded-md text-sm font-medium">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          {content.highMatch} ({scheme.score}%)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-yellow-700 bg-yellow-50 px-2.5 py-1 rounded-md text-sm font-medium">
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          {content.possibleMatch} ({scheme.score}%)
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              <button 
                onClick={() => onSelectScheme(scheme)}
                className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-primary-50 text-primary-700 hover:bg-primary-100 font-medium rounded-xl transition-colors"
              >
                {content.viewDetails}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
}
