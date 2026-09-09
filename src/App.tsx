import React, { useState } from 'react';
import { Home } from './components/Home';
import { VoiceAssistant } from './components/VoiceAssistant';
import { NeedAssistant } from './components/NeedAssistant';
import { ManualEntry } from './components/ManualEntry';
import { Results } from './components/Results';
import { SchemeDetails } from './components/SchemeDetails';
import { ScamVerification } from './components/ScamVerification';
import { SihSkillingPortal } from './components/SihSkillingPortal';
import { type LanguageCode, languages } from './data/languages';
import { type Scheme } from './data/schemes';
import { Globe, Menu, Sparkles } from 'lucide-react';

type ViewState = 'home' | 'assistant' | 'need-assistant' | 'manual' | 'results' | 'details' | 'scam-verification' | 'sih-skilling';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [lang, setLang] = useState<LanguageCode>('hi'); // Default to Hindi for rural focus
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [forcedSchemes, setForcedSchemes] = useState<Scheme[] | null>(null);

  const handleStartVoice = () => {
    setAnswers({});
    setForcedSchemes(null);
    setCurrentView('assistant');
  };

  const handleStartNeedAssistant = () => {
    setForcedSchemes(null);
    setCurrentView('need-assistant');
  };

  const handleStartManual = () => {
    setAnswers({});
    setForcedSchemes(null);
    setCurrentView('manual');
  };

  const handleStartScamVerification = () => {
    setCurrentView('scam-verification');
  };

  const handleStartSihSkilling = () => {
    setCurrentView('sih-skilling');
  };

  const handleAssistantComplete = (finalAnswers: Record<number, string>) => {
    setAnswers(finalAnswers);
    setForcedSchemes(null);
    setCurrentView('results');
  };

  const handleNeedAssistantComplete = (schemes: Scheme[]) => {
    setForcedSchemes(schemes);
    setCurrentView('results');
  };

  const handleSelectScheme = (scheme: Scheme) => {
    setSelectedScheme(scheme);
    setCurrentView('details');
  };

  const navigateHome = () => setCurrentView('home');

  if (currentView === 'sih-skilling') {
    return <SihSkillingPortal onBackToHome={navigateHome} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* Header */}
      <header className="glass-panel sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer hover-lift" 
            onClick={navigateHome}
          >
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-slate-900 hidden sm:block">
              Sarkari Sathi
            </span>
          </div>

          <div className="flex items-center gap-3">
            
            {/* SIH 2026 Navigation Badge */}
            <button 
              onClick={handleStartSihSkilling}
              className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md shadow-orange-500/20 transition-all hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>SIH 2026 Skilling 🎙️</span>
            </button>

            <div className="relative group flex items-center gap-2 bg-slate-50/50 px-3 py-1.5 rounded-full border border-slate-200/50">
              <Globe className="w-4 h-4 text-slate-500" />
              <select 
                value={lang}
                onChange={(e) => setLang(e.target.value as LanguageCode)}
                className="bg-transparent border-none focus:outline-none text-sm font-medium text-slate-700 cursor-pointer appearance-none pr-4"
              >
                {Object.values(languages).map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.name}
                  </option>
                ))}
              </select>
              {/* Custom dropdown arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            <button className="p-2 sm:hidden text-slate-600">
              <Menu className="w-6 h-6" />
            </button>
            
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="transition-all duration-500 ease-in-out animate-fade-in-up">
        {currentView === 'home' && (
          <Home 
            lang={lang} 
            onStartVoice={handleStartVoice} 
            onStartManual={handleStartManual} 
            onStartNeedAssistant={handleStartNeedAssistant}
            onStartScamVerification={handleStartScamVerification}
            onStartSihSkilling={handleStartSihSkilling}
          />
        )}
        
        {currentView === 'scam-verification' && (
          <ScamVerification lang={lang} onBack={navigateHome} />
        )}
        
        {currentView === 'assistant' && (
          <VoiceAssistant lang={lang} onComplete={handleAssistantComplete} />
        )}

        {currentView === 'need-assistant' && (
          <NeedAssistant lang={lang} onComplete={handleNeedAssistantComplete} />
        )}

        {currentView === 'manual' && (
          <ManualEntry lang={lang} onComplete={handleAssistantComplete} />
        )}

        {currentView === 'results' && (
          <Results 
            lang={lang} 
            answers={answers} 
            forcedSchemes={forcedSchemes} 
            onSelectScheme={handleSelectScheme} 
          />
        )}

        {currentView === 'details' && selectedScheme && (
          <SchemeDetails lang={lang} scheme={selectedScheme} onBack={() => setCurrentView('results')} />
        )}
      </main>

    </div>
  );
}

export default App;
