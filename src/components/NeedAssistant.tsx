import React, { useState, useEffect, useRef } from 'react';
import { Mic, Droplet, Zap, Wheat, Home, IndianRupee, Heart } from 'lucide-react';
import { type LanguageCode, getTranslation } from '../data/languages';
import { prototypeSchemes, type Scheme } from '../data/schemes';
import { findSchemesByNeed } from '../utils/aiMatching';

interface NeedAssistantProps {
  lang: LanguageCode;
  onComplete: (schemes: Scheme[]) => void;
}

export function NeedAssistant({ lang, onComplete }: NeedAssistantProps) {
  const t = getTranslation(lang);
  const content = t.needAssistant;

  const [isListening, setIsListening] = useState(false);
  const [transcriptText, setTranscriptText] = useState('');
  const [status, setStatus] = useState<'Ready' | 'Listening' | 'Speaking' | 'Processing'>('Ready');
  const recognitionRef = useRef<any>(null);

  const currentPrompt = content.prompt;

  const getStatusLabel = () => {
    switch (status) {
      case 'Listening': return content.statusListening;
      case 'Speaking': return content.statusSpeaking;
      case 'Processing': return content.statusProcessing;
      default: return content.statusReady;
    }
  };

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      
      const langMap: Record<string, string> = {
        en: 'en-IN', hi: 'hi-IN', bun: 'hi-IN', cg: 'hi-IN', sat: 'hi-IN', spv: 'or-IN',
        mr: 'mr-IN', bn: 'bn-IN', te: 'te-IN', ta: 'ta-IN', gu: 'gu-IN', bho: 'hi-IN', mai: 'hi-IN'
      };
      recognition.lang = langMap[lang] || 'hi-IN';

      recognition.onstart = () => {
        setIsListening(true);
        setStatus('Listening');
      };

      recognition.onresult = (event: any) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscriptText(currentTranscript);
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
        setStatus('Ready');
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
    
    speakText(currentPrompt);
  }, [lang]);

  useEffect(() => {
    if (transcriptText && !isListening) {
      handleProcessNeed(transcriptText);
    }
  }, [isListening]);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      const langMap: Record<string, string> = {
        en: 'en-IN', hi: 'hi-IN', bun: 'hi-IN', cg: 'hi-IN', sat: 'hi-IN', spv: 'or-IN',
        mr: 'mr-IN', bn: 'bn-IN', te: 'te-IN', ta: 'ta-IN', gu: 'gu-IN', bho: 'hi-IN', mai: 'hi-IN'
      };
      utterance.lang = langMap[lang] || 'hi-IN';
      utterance.onstart = () => setStatus('Speaking');
      utterance.onend = () => {
        setStatus('Ready');
        setTranscriptText('');
        try {
          recognitionRef.current?.start();
        } catch (e) {
          console.error("Already listening or error starting", e);
        }
      };
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setTranscriptText('');
      try {
        recognitionRef.current?.start();
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleProcessNeed = (spokenText: string) => {
    setStatus('Processing');
    
    const matched = findSchemesByNeed(spokenText);

    // Wait for a second so the user sees "Processing"
    setTimeout(() => {
      onComplete(matched);
    }, 1500);
  };

  if (status === 'Processing') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="glass-panel rounded-3xl p-12 text-center animate-fade-in-up">
          <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">
            {content.findingSchemes}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="glass-panel rounded-3xl p-8 relative overflow-hidden animate-fade-in-up border border-slate-100">
        
        <div className="text-center mb-8 pt-4">
          <div className="inline-flex items-center justify-center space-x-2 bg-slate-50 px-4 py-2 rounded-full mb-6">
            <div className={`w-2 h-2 rounded-full ${status === 'Listening' ? 'bg-red-500 animate-pulse' : status === 'Speaking' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
            <span className="text-sm font-medium text-slate-600">{getStatusLabel()}</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-8">
            {currentPrompt}
          </h2>
          
          <div className="flex justify-center gap-4 mb-8 text-slate-400">
             <Droplet className="w-6 h-6" />
             <Zap className="w-6 h-6" />
             <Wheat className="w-6 h-6" />
             <Home className="w-6 h-6" />
             <Heart className="w-6 h-6" />
             <IndianRupee className="w-6 h-6" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-8">
          <button
            onClick={toggleListening}
            className={`relative group flex items-center justify-center w-32 h-32 rounded-full transition-all duration-300 shadow-2xl ${
              isListening 
                ? 'bg-gradient-to-br from-red-500 to-red-600 scale-110' 
                : 'bg-gradient-to-br from-primary-500 to-primary-600 hover:scale-105'
            }`}
            style={{
              animation: isListening ? 'pulse-glow 2s infinite' : 'none'
            }}
          >
            <Mic className={`w-12 h-12 text-white ${isListening ? 'animate-pulse' : ''}`} />
            {isListening && (
              <span className="absolute w-full h-full rounded-full border-4 border-red-400 animate-ping opacity-75"></span>
            )}
          </button>
          
          {transcriptText && (
            <p className="mt-8 text-xl text-slate-700 font-medium italic">"{transcriptText}"</p>
          )}
        </div>

      </div>
    </div>
  );
}
