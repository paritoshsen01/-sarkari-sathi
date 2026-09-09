import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Mic, Volume2, VolumeX, Settings } from 'lucide-react';
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

  // Initialize greeting on open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      handleSend("Hello");
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
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-primary-600 to-emerald-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform z-50 group"
        >
          <MessageCircle className="w-7 h-7 group-hover:animate-bounce" />
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[90vw] sm:w-[380px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-slate-200 flex flex-col">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-emerald-600 p-4 text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">AJAY Sathi AI</h3>
                <p className="text-xs text-primary-100">Government Schemes Guide</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setShowSettings(!showSettings)} className="p-1.5 hover:bg-white/20 rounded-full transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button onClick={() => setIsSpeakerOn(!isSpeakerOn)} className="p-1.5 hover:bg-white/20 rounded-full transition-colors">
                {isSpeakerOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
              <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/20 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Settings Overlay */}
          {showSettings && (
            <div className="absolute inset-0 top-16 bg-white z-20 p-6 flex flex-col shrink-0">
              <h4 className="font-bold text-slate-800 mb-2">AI Settings</h4>
              <p className="text-xs text-slate-500 mb-4">Enter your Gemini API Key to activate the chat.</p>
              <input 
                type="password" 
                value={tempApiKey}
                onChange={e => setTempApiKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm mb-4 focus:outline-primary-500"
              />
              <div className="flex gap-2">
                <button onClick={saveApiKey} className="flex-1 bg-primary-600 text-white py-2 rounded-lg text-sm font-bold">Save</button>
                <button onClick={() => setShowSettings(false)} className="flex-1 bg-slate-100 text-slate-700 py-2 rounded-lg text-sm font-bold">Cancel</button>
              </div>
            </div>
          )}

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-4">
            {messages.length === 0 && !isLoading && (
              <div className="text-center text-slate-400 text-sm mt-10">
                Starting chat...
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-tr-sm' 
                      : 'bg-white border border-slate-100 text-slate-700 rounded-tl-sm'
                  }`}
                >
                  {msg.role === 'model' ? formatMessage(msg.text) : msg.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-4 rounded-2xl bg-white border border-slate-100 rounded-tl-sm flex gap-1 items-center shadow-sm">
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-end gap-2 shrink-0">
            <button 
              onClick={toggleListening}
              className={`p-3 rounded-full shrink-0 transition-colors shadow-sm ${isListening ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
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
              placeholder="Ask about any scheme..."
              className="flex-1 max-h-32 min-h-12 resize-none bg-slate-100 border-none rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              rows={1}
            />
            <button 
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className={`p-3 rounded-full shrink-0 shadow-md transition-all ${
                input.trim() && !isLoading 
                  ? 'bg-primary-600 text-white hover:bg-primary-700 hover:scale-105' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          
        </div>
      )}
    </>
  );
}
