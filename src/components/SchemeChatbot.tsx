import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Mic, Volume2, VolumeX, Settings, Bot } from 'lucide-react';
import { type LanguageCode } from '../data/languages';
import { chatWithGemini, type ChatMessage } from '../utils/geminiChatbot';

interface SchemeChatbotProps {
  lang: LanguageCode;
}

export function SchemeChatbot({ lang }: SchemeChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  
  const [apiKey, setApiKey] = useState(localStorage.getItem('VITE_GEMINI_API_KEY') || import.meta.env.VITE_GEMINI_API_KEY || '');
  const [showSettings, setShowSettings] = useState(false);
  const [tempApiKey, setTempApiKey] = useState(apiKey);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Initialize greeting on open and stop speech on close
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      handleSend("Hello");
    }
    if (!isOpen && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, [isOpen]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Speech Recognition
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = lang === 'hi' ? 'hi-IN' : 'en-IN'; // Extend mapping as needed

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = (e: any) => {
        console.error("Speech error", e);
        setIsListening(false);
      };
      
      recognition.onresult = (event: any) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setInput(currentTranscript);
      };

      recognitionRef.current = recognition;
    }
  }, [lang]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setInput('');
      recognitionRef.current?.start();
    }
  };

  const toggleSpeaker = () => {
    if (isSpeakerOn && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeakerOn(!isSpeakerOn);
  };

  const speakText = (text: string) => {
    if (!isSpeakerOn || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    
    // Remove emojis and markdown for TTS
    const cleanText = text.replace(/[*_#`]/g, '').replace(/[\u{1F600}-\u{1F6FF}]/gu, '');
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async (textToSend: string = input) => {
    if (!textToSend.trim() || !apiKey) {
      if (!apiKey) setShowSettings(true);
      return;
    }

    // If it's just "Hello" from initialization, don't show it in UI as a user message,
    // just pass it to AI to get the greeting.
    const isInit = textToSend === "Hello" && messages.length === 0;

    const newMessages = isInit ? [] : [...messages, { role: 'user' as const, text: textToSend }];
    if (!isInit) setMessages(newMessages);
    
    setInput('');
    setIsLoading(true);

    try {
      // Send the history without the initialization "Hello" to avoid confusion later, 
      // but if it's init, just send empty history.
      const response = await chatWithGemini(newMessages, textToSend, lang, apiKey);
      
      setMessages([...newMessages, { role: 'model', text: response }]);
      speakText(response);
    } catch (error: any) {
      setMessages([...newMessages, { role: 'model', text: `Sorry, I encountered an error: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const saveApiKey = () => {
    setApiKey(tempApiKey);
    localStorage.setItem('VITE_GEMINI_API_KEY', tempApiKey);
    setShowSettings(false);
  };

  // Render HTML formatting for model messages (simple bold/bullets)
  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Bold
      let formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // Bullets
      if (formattedLine.startsWith('* ')) {
        formattedLine = `<li class="ml-4 list-disc">${formattedLine.substring(2)}</li>`;
      }
      return <div key={i} dangerouslySetInnerHTML={{ __html: formattedLine || '<br/>' }} />;
    });
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-tr from-emerald-600 via-primary-600 to-teal-500 rounded-full shadow-[0_10px_25px_-5px_rgba(16,185,129,0.5)] flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-50 group hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.6)]"
        >
          {/* Pulsing rings effect behind icon */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          
          <Bot className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Notification Dot */}
          <span className="absolute top-1 right-1 w-4 h-4 bg-amber-400 border-2 border-white rounded-full animate-pulse shadow-sm"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[92vw] sm:w-[400px] h-[600px] max-h-[85vh] bg-slate-50 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden z-50 border border-white/50 backdrop-blur-xl">
          
          {/* Header */}
          <div className="relative bg-gradient-to-r from-emerald-700 via-primary-700 to-teal-700 p-5 text-white flex items-center justify-between shrink-0 shadow-md z-10 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl -ml-8 -mb-8"></div>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 shadow-inner">
                  <Bot className="w-6 h-6 text-emerald-100" />
                </div>
                {/* Active indicator */}
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-emerald-700 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg tracking-tight">AJAY Sathi AI</h3>
                <p className="text-xs text-emerald-100 font-medium">Always online & ready to help</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1 relative z-10">
              <button onClick={() => setShowSettings(!showSettings)} className="p-2 hover:bg-white/20 rounded-full transition-colors" title="API Settings">
                <Settings className="w-5 h-5" />
              </button>
              <button onClick={toggleSpeaker} className="p-2 hover:bg-white/20 rounded-full transition-colors" title="Toggle Voice">
                {isSpeakerOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 opacity-70" />}
              </button>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors bg-black/10 ml-1" title="Close Chat">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Settings Overlay */}
          {showSettings && (
            <div className="absolute inset-x-0 top-[88px] bottom-0 bg-white/95 backdrop-blur-sm z-20 p-6 flex flex-col shadow-inner animate-in slide-in-from-top-2">
              <h4 className="font-bold text-slate-800 mb-1 text-lg">AI Connection Settings</h4>
              <p className="text-sm text-slate-500 mb-6">Update your Gemini API Key to continue chatting.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1 block">API Key</label>
                  <input 
                    type="password" 
                    value={tempApiKey}
                    onChange={e => setTempApiKey(e.target.value)}
                    placeholder="AIzaSy..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-inner"
                  />
                </div>
                
                <div className="flex gap-3 pt-2">
                  <button onClick={saveApiKey} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-sm font-bold shadow-md shadow-emerald-200 transition-colors">
                    Save Changes
                  </button>
                  <button onClick={() => setShowSettings(false)} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-xl text-sm font-bold transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Messages Area */}
          <div className="flex-1 p-5 overflow-y-auto bg-slate-50/50 flex flex-col gap-5 relative">
            {messages.length === 0 && !isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-60">
                <MessageCircle className="w-16 h-16 text-slate-300 mb-4" />
                <p className="text-slate-400 font-medium">Start a conversation...</p>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md mr-2 shrink-0 mt-auto mb-1">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div 
                  className={`max-w-[75%] p-4 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-br from-primary-600 to-emerald-600 text-white shadow-md rounded-[20px] rounded-br-sm' 
                      : 'bg-white text-slate-700 shadow-sm border border-slate-100/50 rounded-[20px] rounded-bl-sm'
                  }`}
                >
                  {msg.role === 'model' ? formatMessage(msg.text) : msg.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start w-full">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md mr-2 shrink-0 mt-auto mb-1">
                  <Bot className="w-4 h-4 text-white animate-pulse" />
                </div>
                <div className="bg-white p-4 rounded-[20px] rounded-bl-sm border border-slate-100 shadow-sm flex items-center gap-1.5 h-12">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} className="h-2" />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100 shrink-0 z-10 rounded-b-3xl">
            <div className="relative flex items-end gap-2 bg-slate-50 border border-slate-200 rounded-2xl p-1 shadow-inner focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-300 transition-all">
              
              <button 
                onClick={toggleListening}
                className={`p-3 rounded-xl shrink-0 transition-all ${
                  isListening 
                    ? 'bg-red-100 text-red-600 shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-pulse' 
                    : 'text-slate-400 hover:bg-slate-200 hover:text-slate-600'
                }`}
                title="Speak your question"
              >
                <Mic className="w-5 h-5" />
              </button>
              
              <textarea 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder={isListening ? "Listening..." : "Type your message..."}
                className="flex-1 max-h-32 min-h-[44px] py-3 bg-transparent border-none resize-none text-sm focus:outline-none placeholder:text-slate-400"
                rows={1}
              />
              
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className={`p-3 m-1 rounded-xl shrink-0 transition-all duration-300 ${
                  input.trim() && !isLoading 
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5' 
                    : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                }`}
              >
                <Send className="w-5 h-5 ml-0.5" />
              </button>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
}
