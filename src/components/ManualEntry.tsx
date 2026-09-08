import React, { useState } from 'react';
import { ArrowRight, User } from 'lucide-react';
import { type LanguageCode, languages } from '../data/languages';

interface ManualEntryProps {
  lang: LanguageCode;
  onComplete: (answers: Record<number, string>) => void;
}

export function ManualEntry({ lang, onComplete }: ManualEntryProps) {
  const content = languages[lang].assistant;
  
  // States for the 7 questions
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [block, setBlock] = useState('');
  const [village, setVillage] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [income, setIncome] = useState('');
  const [familySize, setFamilySize] = useState('');
  const [rationCard, setRationCard] = useState('');
  const [student, setStudent] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const answers: Record<number, string> = {
      0: state,
      1: district,
      2: block,
      3: village,
      4: age,
      5: occupation,
      6: income,
      7: familySize,
      8: rationCard,
      9: student
    };
    onComplete(answers);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fade-in-up">
      <div className="glass-panel rounded-3xl p-8 border border-white/60">
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
            <User className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">
            {languages[lang].home.manualCTA}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{content.questions[0]}</label>
            <input 
              required
              type="text" 
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="e.g. Madhya Pradesh"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{content.questions[1]}</label>
            <input 
              required
              type="text" 
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="e.g. Sehore"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{content.questions[2]}</label>
            <input 
              required
              type="text" 
              value={block}
              onChange={(e) => setBlock(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="e.g. Ashta"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{content.questions[3]}</label>
            <input 
              required
              type="text" 
              value={village}
              onChange={(e) => setVillage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="e.g. Kothri"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{content.questions[4]}</label>
            <input 
              required
              type="number" 
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="e.g. 42"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{content.questions[5]}</label>
            <select 
              required
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
            >
              <option value="" disabled>Select...</option>
              {content.occupations.map((occ, idx) => (
                <option key={idx} value={occ}>{occ}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{content.questions[6]}</label>
            <select 
              required
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
            >
              <option value="" disabled>Select...</option>
              {content.incomes.map((inc, idx) => (
                <option key={idx} value={inc}>{inc}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{content.questions[7]}</label>
            <input 
              required
              type="number" 
              value={familySize}
              onChange={(e) => setFamilySize(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="e.g. 4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{content.questions[8]}</label>
            <select 
              required
              value={rationCard}
              onChange={(e) => setRationCard(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
            >
              <option value="" disabled>Select...</option>
              <option value="Yes">Yes / हाँ</option>
              <option value="No">No / नहीं</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">{content.questions[9]}</label>
            <select 
              required
              value={student}
              onChange={(e) => setStudent(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
            >
              <option value="" disabled>Select...</option>
              <option value="Yes">Yes / हाँ</option>
              <option value="No">No / नहीं</option>
            </select>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-md hover:shadow-lg"
            >
              {content.processing.split('!')[0]}! {/* "Thank you!" in respective lang */}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
