
import React, { useState } from 'react';
import { PRACTICE_QUESTIONS } from '../constants';
import Controls from './Controls';
import { CheckCircle, XCircle, ArrowRight, HelpCircle } from 'lucide-react';
import { ShiftDirection } from '../types';

interface PracticePanelProps {
  demandShift: number;
  supplyShift: number;
  setDemandShift: (val: number) => void;
  setSupplyShift: (val: number) => void;
}

const PracticePanel: React.FC<PracticePanelProps> = ({
  demandShift,
  supplyShift,
  setDemandShift,
  setSupplyShift
}) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = PRACTICE_QUESTIONS[currentQIndex];

  const getDirection = (shift: number): ShiftDirection => {
    if (shift > 5) return 'increase';
    if (shift < -5) return 'decrease';
    return 'none';
  };

  const handleCheck = () => {
    if (!currentQuestion) return;
    const dDir = getDirection(demandShift);
    const sDir = getDirection(supplyShift);

    if (dDir === currentQuestion.correctDemand && sDir === currentQuestion.correctSupply) {
      setFeedback('correct');
      setShowExplanation(true);
    } else {
      setFeedback('incorrect');
    }
  };

  const handleNext = () => {
    setFeedback(null);
    setShowExplanation(false);
    setDemandShift(0);
    setSupplyShift(0);
    setCurrentQIndex((prev) => (prev + 1) % PRACTICE_QUESTIONS.length);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-full">
      <div className="p-4 text-white bg-indigo-600 flex items-center justify-between">
        <h3 className="font-bold flex items-center gap-2">
          <HelpCircle className="w-5 h-5" />
          Practice Challenge
        </h3>
        <span className="text-xs opacity-80 px-2 py-1 rounded bg-black/20">
          {currentQIndex + 1} / {PRACTICE_QUESTIONS.length}
        </span>
      </div>

      <div className="p-6 flex-grow flex flex-col space-y-6">
        
        {/* Question Card */}
        <div className="border p-4 rounded-xl bg-slate-50 border-slate-200">
          {currentQuestion ? (
            <>
              <p className="text-lg font-medium text-slate-800 mb-2 leading-snug">
                {currentQuestion.question}
              </p>
              <div className="text-sm text-slate-500 flex items-center gap-1">
                <span className="font-bold text-indigo-600">Hint:</span> {currentQuestion.hint}
              </div>
            </>
          ) : (
            <p className="text-center text-slate-400 py-4 italic">No question loaded.</p>
          )}
        </div>

        {/* Controls */}
        <div className="border border-slate-100 rounded-xl p-4">
           <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-4 text-center font-bold">
             Manipulate the curves
           </p>
           <Controls 
             demandShift={demandShift} 
             supplyShift={supplyShift} 
             setDemandShift={setDemandShift} 
             setSupplyShift={setSupplyShift} 
             disabled={feedback === 'correct'}
           />
        </div>

        {/* Feedback Area */}
        {feedback && (
          <div className={`p-4 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 ${
            feedback === 'correct' ? 'bg-green-50 text-green-900 border border-green-100' : 'bg-red-50 text-red-900 border border-red-100'
          }`}>
             {feedback === 'correct' ? <CheckCircle className="w-5 h-5 text-green-600 shrink-0" /> : <XCircle className="w-5 h-5 text-red-600 shrink-0" />}
             <div>
               <p className="font-bold">{feedback === 'correct' ? 'Correct!' : 'Not quite right'}</p>
               {feedback === 'incorrect' && (
                 <p className="text-sm mt-1">Check if this affects buyers (Demand) or sellers (Supply). Remember: "Increase" moves a curve to the right.</p>
               )}
               {showExplanation && (
                 <p className="text-sm mt-2 pt-2 border-t border-green-200/50 italic">
                   {currentQuestion?.explanation}
                 </p>
               )}
             </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-auto space-y-3 pt-4">
          {feedback === 'correct' ? (
            <button 
              onClick={handleNext}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              Next Question <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button 
              onClick={handleCheck}
              disabled={!currentQuestion}
              className="w-full py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 shadow-md transition-all disabled:opacity-50"
            >
              Verify Solution
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default PracticePanel;
