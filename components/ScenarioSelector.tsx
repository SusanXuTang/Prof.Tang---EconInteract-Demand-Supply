import React from 'react';
import { Scenario } from '../types';
import { SCENARIOS } from '../constants';
import { PlayCircle } from 'lucide-react';

interface ScenarioSelectorProps {
  currentScenarioId: string | null;
  onSelectScenario: (scenario: Scenario) => void;
}

const ScenarioSelector: React.FC<ScenarioSelectorProps> = ({ currentScenarioId, onSelectScenario }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {SCENARIOS.map((scenario) => {
        const isActive = currentScenarioId === scenario.id;
        return (
          <button
            key={scenario.id}
            onClick={() => onSelectScenario(scenario)}
            className={`
              relative p-4 rounded-xl border text-left transition-all duration-300 group
              hover:shadow-lg hover:-translate-y-1
              ${isActive 
                ? 'bg-white border-indigo-600 ring-2 ring-indigo-500/20 z-10' 
                : 'bg-white border-slate-200 hover:border-indigo-300'
              }
            `}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-indigo-50'}`}>
                <span className="text-xl" role="img" aria-label={scenario.title}>{scenario.emoji}</span>
              </div>
              {isActive && <div className="bg-indigo-600 h-2 w-2 rounded-full animate-pulse"></div>}
            </div>
            <h4 className={`font-bold mb-1 text-sm tracking-tight ${isActive ? 'text-indigo-900' : 'text-slate-800'}`}>
              {scenario.title}
            </h4>
            <p className="text-[11px] text-slate-500 leading-tight line-clamp-2">
              {scenario.description}
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default ScenarioSelector;