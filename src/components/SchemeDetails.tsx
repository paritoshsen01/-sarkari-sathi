import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, CheckCircle2, FileText, Info, Users, Mic } from 'lucide-react';
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

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-600 hover:text-primary-600 mb-6 font-medium transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        {content.back}
      </button>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-50 p-5 md:p-8 border-b border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-3xl">
              {scheme.icon}
            </div>
            <div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-white text-slate-600 border border-slate-200 inline-block mb-2">
                {scheme.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{scheme.name}</h1>
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
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 mb-3">
              <FileText className="w-5 h-5 text-primary-600" />
              {content.documents}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {scheme.documents.map((doc, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                  {doc}
                </li>
              ))}
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
