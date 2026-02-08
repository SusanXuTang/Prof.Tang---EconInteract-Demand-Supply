
export interface MarketState {
  demandShift: number; 
  supplyShift: number; 
}

export interface EquilibriumPoint {
  price: number;
  quantity: number;
}

export interface Scenario {
  id: string;
  title: string;
  emoji: string;
  description: string;
  demandShift: number;
  supplyShift: number;
  explanation: string;
}

export interface GraphDataPoint {
  q: number;
  demand: number | null;
  supply: number | null;
}

export type ShiftDirection = 'increase' | 'decrease' | 'none';

export interface PracticeQuestion {
  id: string;
  question: string;
  hint: string;
  correctDemand: ShiftDirection;
  correctSupply: ShiftDirection;
  explanation: string;
}
