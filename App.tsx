import React, { useState, useMemo } from 'react';
import MarketGraph from './components/MarketGraph';
import ScenarioSelector from './components/ScenarioSelector';
import AnalysisPanel from './components/AnalysisPanel';
import PracticePanel from './components/PracticePanel';
import { BASE_DEMAND_INTERCEPT, BASE_DEMAND_SLOPE, BASE_SUPPLY_INTERCEPT, BASE_SUPPLY_SLOPE } from './constants';
import { EquilibriumPoint, Scenario } from './types';
import { BookOpen, Compass, GraduationCap } from 'lucide-react';

type AppMode = 'explore' | 'practice';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('explore');
  const [demandShift, setDemandShift] = useState<number>(0);
  const [supplyShift, setSupplyShift] = useState<number>(0);
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>('baseline');
  const [activeScenarioData, setActiveScenarioData] = useState<Scenario | null>(null);

  // Calculate Equilibrium
  const equilibrium = useMemo<EquilibriumPoint>(() => {
    const dInt = BASE_DEMAND_INTERCEPT + demandShift;
    const sInt = BASE_SUPPLY_INTERCEPT - supplyShift;
    
    let q = (dInt - sInt) / (BASE_SUPPLY_SLOPE + BASE_DEMAND_SLOPE);
    q = Math.max(0, q);

    let p = dInt - (BASE_DEMAND_SLOPE * q);
    p = Math.max(0, p);

    return { price: p, quantity: q };
  }, [demandShift, supplyShift]);

  const handleScenarioSelect = (scenario: Scenario) => {
    setDemandShift(scenario.demandShift);
    setSupplyShift(scenario.supplyShift);
    setActiveScenarioId(scenario.id);
    setActiveScenarioData(scenario);
  };

  const handleManualDemandChange = (val: number) => {
    setDemandShift(val);
    setActiveScenarioId(null);
    setActiveScenarioData(null);
  };

  const handleManualSupplyChange = (val: number) => {
    setSupplyShift(val);
    setActiveScenarioId(null);
    setActiveScenarioData(null);
  };

  const switchMode = (newMode: AppMode) => {
    setMode(newMode);
    // Reset state when switching modes
    setDemandShift(0);
    setSupplyShift(0);
    setActiveScenarioId('baseline');
    setActiveScenarioData(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
              EconInteract
            </h1>
          </div>
          
          {/* Mode Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-lg">
             <button
               onClick={() => switchMode('explore')}
               className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                 mode === 'explore' 
                   ? 'bg-white text-indigo-700 shadow-sm' 
                   : 'text-slate-500 hover:text-slate-700'
               }`}
             >
               <Compass className="w-4 h-4" /> Explore
             </button>
             <button
               onClick={() => switchMode('practice')}
               className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                 mode === 'practice' 
                   ? 'bg-white text-indigo-700 shadow-sm' 
                   : 'text-slate-500 hover:text-slate-700'
               }`}
             >
               <GraduationCap className="w-4 h-4" /> Practice
             </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* Main Graph Area */}
          <div className="lg:col-span-8 space-y-4">
             <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200">
                <MarketGraph 
                  demandShift={demandShift} 
                  supplyShift={supplyShift} 
                  equilibrium={equilibrium}
                />
             </div>
             
             {/* Scenarios - Only Visible in Explore Mode */}
             {mode === 'explore' && (
               <div className="mt-6 animate-in fade-in">
                 <h3 className="text-lg font-bold text-slate-800 mb-4 px-1">Real-World Scenarios</h3>
                 <ScenarioSelector 
                    currentScenarioId={activeScenarioId} 
                    onSelectScenario={handleScenarioSelect} 
                 />
               </div>
             )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6 min-h-[600px]">
            {mode === 'explore' ? (
              <AnalysisPanel 
                equilibrium={equilibrium}
                demandShift={demandShift}
                supplyShift={supplyShift}
                setDemandShift={handleManualDemandChange}
                setSupplyShift={handleManualSupplyChange}
                activeScenario={activeScenarioData}
              />
            ) : (
              <PracticePanel 
                demandShift={demandShift}
                supplyShift={supplyShift}
                setDemandShift={handleManualDemandChange}
                setSupplyShift={handleManualSupplyChange}
              />
            )}
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;
