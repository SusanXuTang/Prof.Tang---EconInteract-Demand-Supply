
import React from 'react';
import { EquilibriumPoint, Scenario } from '../types';
import { FileText, TrendingUp, TrendingDown } from 'lucide-react';
import Controls from './Controls';

interface AnalysisPanelProps {
  equilibrium: EquilibriumPoint;
  demandShift: number;
  supplyShift: number;
  setDemandShift: (val: number) => void;
  setSupplyShift: (val: number) => void;
  activeScenario: Scenario | null;
}

const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ 
  equilibrium, 
  demandShift, 
  supplyShift,
  setDemandShift,
  setSupplyShift,
  activeScenario
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-full">
      <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
        <FileText className="w-5 h-5 text-indigo-600" />
        <h3 className="font-bold text-slate-800">Market Insights</h3>
      </div>
      
      <div className="p-6 space-y-6 flex-grow flex flex-col">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100 text-center">
            <div className="text-[10px] text-indigo-600 font-semibold uppercase tracking-wider mb-1">Price</div>
            <div className="text-3xl font-bold text-indigo-900">${equilibrium.price.toFixed(2)}</div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-100 text-center">
            <div className="text-[10px] text-purple-600 font-semibold uppercase tracking-wider mb-1">Quantity</div>
            <div className="text-3xl font-bold text-purple-900">{equilibrium.quantity.toFixed(1)}</div>
          </div>
        </div>

        {/* Dynamic Explanation */}
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
            Theory & Concepts
          </h4>
          
          {activeScenario ? (
            <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl">
              <p className="text-sm text-emerald-900 leading-relaxed">
                <span className="font-bold block text-emerald-600 mb-1 text-base">{activeScenario.title}</span>
                {activeScenario.explanation}
              </p>
            </div>
          ) : (
            <div className="text-sm text-slate-500 italic bg-slate-50 p-4 rounded-xl border border-slate-100 border-dashed">
              Adjust the sliders below to manually observe how curve shifts impact price and quantity equilibrium.
            </div>
          )}
        </div>

        {/* Integrated Controls */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 mt-auto">
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-5 text-center">Manual Curve Control</h4>
          <Controls 
            demandShift={demandShift}
            supplyShift={supplyShift}
            setDemandShift={setDemandShift}
            setSupplyShift={setSupplyShift}
          />
        </div>
      </div>
    </div>
  );
};

export default AnalysisPanel;
