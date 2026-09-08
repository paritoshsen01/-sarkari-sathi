import React, { useState } from 'react';
import { ShieldAlert, CheckCircle, AlertTriangle, XCircle, Search, Upload, ArrowLeft } from 'lucide-react';
import { verifyScheme, type VerificationResponse } from '../utils/scamVerification';
import { type LanguageCode, languages } from '../data/languages';

interface ScamVerificationProps {
  lang: LanguageCode;
  onBack: () => void;
}

export function ScamVerification({ lang, onBack }: ScamVerificationProps) {
  const content = languages[lang].home; 

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [msg, setMsg] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<VerificationResponse | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name && !url && !msg) return;

    setIsVerifying(true);
    setResult(null);

    // Simulate network delay for verification
    setTimeout(() => {
      const res = verifyScheme(name, url, msg);
      setResult(res);
      setIsVerifying(false);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fade-in-up">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </button>

      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4 shadow-sm">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Scam / Fake Scheme Check</h2>
        <p className="text-slate-600">
          Received a suspicious WhatsApp forward or SMS about free government money? Paste it below to verify if it's a real scheme or a scam.
        </p>
      </div>

      <form onSubmit={handleVerify} className="glass-panel p-6 md:p-8 rounded-3xl space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Scheme Name (if mentioned)</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
            placeholder="e.g. PM Kisan Yojana"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Website Link / URL</label>
          <input 
            type="text" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
            placeholder="e.g. bit.ly/free-money or pmkisan.gov.in"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Message Received (WhatsApp/SMS)</label>
          <textarea 
            rows={3}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white resize-none"
            placeholder="Paste the full message here..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Upload Screenshot (Optional)</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors relative overflow-hidden">
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover opacity-50" />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 text-slate-400 mb-2" />
                  <p className="text-sm text-slate-500 font-medium">Click to upload screenshot</p>
                </div>
              )}
              <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            </label>
          </div>
        </div>

        <button 
          type="submit"
          disabled={isVerifying || (!name && !url && !msg)}
          className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold shadow-lg shadow-slate-900/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isVerifying ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Verifying against databases...
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              Verify Now
            </>
          )}
        </button>
      </form>

      {/* Results Section */}
      {result && !isVerifying && (
        <div className="mt-8 animate-fade-in-up">
          <div className={"p-6 rounded-3xl border shadow-sm " + (
            result.status === 'verified' ? 'bg-green-50 border-green-200' :
            result.status === 'suspicious' ? 'bg-red-50 border-red-200' :
            'bg-amber-50 border-amber-200'
          )}>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                {result.status === 'verified' && <CheckCircle className="w-8 h-8 text-green-600" />}
                {result.status === 'suspicious' && <XCircle className="w-8 h-8 text-red-600" />}
                {result.status === 'unknown' && <AlertTriangle className="w-8 h-8 text-amber-600" />}
              </div>
              
              <div>
                <h3 className={"text-xl font-bold mb-2 " + (
                  result.status === 'verified' ? 'text-green-800' :
                  result.status === 'suspicious' ? 'text-red-800' :
                  'text-amber-800'
                )}>
                  {result.status === 'verified' ? 'Verified Official Scheme' :
                   result.status === 'suspicious' ? 'Suspicious / Fake Scheme Detected!' :
                   'Could Not Fully Verify'}
                </h3>
                
                <p className={"text-base leading-relaxed " + (
                  result.status === 'verified' ? 'text-green-700' :
                  result.status === 'suspicious' ? 'text-red-700' :
                  'text-amber-700'
                )}>
                  {result.message}
                </p>

                {result.matchedScheme && result.status !== 'suspicious' && (
                  <div className="mt-4 pt-4 border-t border-black/10">
                    <p className="text-sm font-semibold mb-1 opacity-80">Matched Official Database Entry:</p>
                    <p className="font-bold">{result.matchedScheme}</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
