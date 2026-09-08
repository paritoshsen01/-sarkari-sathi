import React, { useState, useEffect, useRef } from 'react';
import { Mic, Send, Volume2 } from 'lucide-react';
import { type LanguageCode, languages } from '../data/languages';

// Add types for Web Speech API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface VoiceAssistantProps {
  lang: LanguageCode;
  onComplete: (answers: Record<number, string>) => void;
}

export function VoiceAssistant({ lang, onComplete }: VoiceAssistantProps) {
  const content = languages[lang].assistant;
  const questions = content.questions;
  
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isListening, setIsListening] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [transcriptText, setTranscriptText] = useState('');
  const [status, setStatus] = useState<'Ready' | 'Listening' | 'Speaking'>('Ready');

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Initialize speech recognition
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
        setStatus('Ready');
        // If there was recognized text, we don't auto-submit to allow user to verify.
        // Actually, for a fluid voice experience, we might want to auto-submit.
        // But since it might not be perfect, let's put it in textInput.
      };

      recognitionRef.current = recognition;
    }
    
    // Announce first question
    speakText(questions[0]);
  }, [lang]);

  // When transcript updates and listening ends, we could auto-submit, but let's just populate text input
  useEffect(() => {
    if (transcriptText && !isListening) {
      handleAnswer(transcriptText);
      setTranscriptText('');
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
        // Auto-start listening after question is spoken
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

  const handleAnswer = (answer: string) => {
    if (!answer.trim()) return;
    
    const newAnswers = { ...answers, [currentQIndex]: answer };
    setAnswers(newAnswers);
    setTextInput('');

    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
      speakText(questions[currentQIndex + 1]);
    } else {
      // Completed
      speakText(content.processing);
      setTimeout(() => {
        onComplete(newAnswers);
      }, 2500); // Small delay to show "processing" message
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      
      {currentQIndex < questions.length ? (
        <div className="glass-panel rounded-3xl p-8 relative overflow-hidden animate-fade-in-up">
          
          {/* Progress bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
            <div 
              className="h-full bg-primary-500 transition-all duration-500"
              style={{ width: `${(currentQIndex / questions.length) * 100}%` }}
            ></div>
          </div>

          <div className="text-center mb-8 pt-4">
            <div className="inline-flex items-center justify-center space-x-2 bg-slate-50 px-4 py-2 rounded-full mb-6">
              <div className={`w-2 h-2 rounded-full ${status === 'Listening' ? 'bg-red-500 animate-pulse' : status === 'Speaking' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
              <span className="text-sm font-medium text-slate-600">{status}</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
              {questions[currentQIndex]}
            </h2>
            
            <button 
              onClick={() => speakText(questions[currentQIndex])}
              className="p-2 text-primary-600 bg-primary-50 rounded-full hover:bg-primary-100 transition-colors"
              aria-label="Replay question"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center py-8">
            <button
              onClick={toggleListening}
              className={`relative group flex items-center justify-center w-32 h-32 rounded-full transition-all duration-300 ${
                isListening 
                  ? 'bg-red-500 hover:bg-red-600 shadow-[0_0_40px_rgba(239,68,68,0.4)] scale-110' 
                  : 'bg-primary-600 hover:bg-primary-700 shadow-xl hover:shadow-2xl'
              }`}
            >
              <Mic className="w-12 h-12 text-white" />
              {isListening && (
                <span className="absolute w-full h-full rounded-full border-4 border-red-400 animate-ping opacity-75"></span>
              )}
            </button>
            <p className="mt-6 text-lg font-medium text-slate-700">
              {isListening ? content.listening : content.tapToSpeak}
            </p>
            {transcriptText && (
              <p className="mt-4 text-slate-600 italic">"{transcriptText}"</p>
            )}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100">
            <p className="text-sm text-center text-slate-500 mb-4">{content.orType}</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAnswer(textInput)}
                placeholder={content.typePlaceholder}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
              />
              <button
                onClick={() => handleAnswer(textInput)}
                disabled={!textInput.trim()}
                className="bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span className="hidden sm:inline">{content.send}</span>
              </button>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <span className="text-sm text-slate-400">
              Question {currentQIndex + 1} of {questions.length}
            </span>
          </div>

        </div>
      ) : (
        <div className="glass-panel rounded-3xl p-12 text-center animate-fade-in-up">
          <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">
            {content.processing}
          </h2>
        </div>
      )}
    </div>
  );
}
