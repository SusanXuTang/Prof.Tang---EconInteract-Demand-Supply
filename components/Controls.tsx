import React from 'react';
import { TrendingUp, TrendingDown, ArrowRight, ArrowLeft } from 'lucide-react';

interface ControlsProps {
  demandShift: number;
  supplyShift: number;
  setDemandShift: (val: number) => void;
  setSupplyShift: (val: number) => void;
  disabled?: boolean;
}

const Controls: React.FC<ControlsProps> = ({ 
  demandShift, 
  supplyShift, 
  setDemandShift, 
  setSupplyShift,
  disabled = false
}) => {
  return (
    <div className="space-y-6">
      
      {/* Demand Control */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold text-blue-600 flex items-center gap-2">
            <TrendingDown className="w-4 h-4" /> Demand Shift
          </h3>
          <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
            {demandShift > 0 ? '+' : ''}{demandShift}
          </span>
        </div>
        <input
          type="range"
          min="-50"
          max="50"
          value={demandShift}
          onChange={(e) => setDemandShift(Number(e.target.value))}
          disabled={disabled}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 disabled:opacity-50"
        />
        <div className="flex justify-between text-[10px] text-slate-400 font-medium uppercase tracking-wide">
          <span className="flex items-center gap-1"><ArrowLeft className="w-3 h-3"/> Decrease</span>
          <span className="flex items-center gap-1">Increase <ArrowRight className="w-3 h-3"/></span>
        </div>
      </div>

      <div className="border-t border-slate-100"></div>

      {/* Supply Control */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold text-red-600 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" /> Supply Shift
          </h3>
          <span className="text-xs font-mono bg-red-50 text-red-700 px-2 py-0.5 rounded">
            {supplyShift > 0 ? '+' : ''}{supplyShift}
          </span>
        </div>
        <input
          type="range"
          min="-50"
          max="50"
          value={supplyShift}
          onChange={(e) => setSupplyShift(Number(e.target.value))}
          disabled={disabled}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600 disabled:opacity-50"
        />
        <div className="flex justify-between text-[10px] text-slate-400 font-medium uppercase tracking-wide">
          <span className="flex items-center gap-1"><ArrowLeft className="w-3 h-3"/> Decrease</span>
          <span className="flex items-center gap-1">Increase <ArrowRight className="w-3 h-3"/></span>
        </div>
      </div>
    </div>
  );
};

export default Controls;
