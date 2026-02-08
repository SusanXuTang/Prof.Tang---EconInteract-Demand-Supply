import React, { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  ReferenceLine,
  Label
} from 'recharts';
import { BASE_DEMAND_INTERCEPT, BASE_DEMAND_SLOPE, BASE_SUPPLY_INTERCEPT, BASE_SUPPLY_SLOPE } from '../constants';
import { GraphDataPoint, EquilibriumPoint } from '../types';

interface MarketGraphProps {
  demandShift: number;
  supplyShift: number;
  equilibrium: EquilibriumPoint;
}

const MarketGraph: React.FC<MarketGraphProps> = ({ demandShift, supplyShift, equilibrium }) => {
  
  const data = useMemo<GraphDataPoint[]>(() => {
    const points: GraphDataPoint[] = [];
    // Generate points for Q from 0 to 100
    for (let q = 0; q <= 100; q += 5) {
      // Demand: P = (100 + Shift) - 1*Q
      const demandP = (BASE_DEMAND_INTERCEPT + demandShift) - (BASE_DEMAND_SLOPE * q);
      
      // Supply: P = (10 - Shift) + 1*Q
      const supplyP = (BASE_SUPPLY_INTERCEPT - supplyShift) + (BASE_SUPPLY_SLOPE * q);

      points.push({
        q,
        demand: demandP >= 0 ? demandP : null, // Don't plot negative prices
        supply: supplyP >= 0 ? supplyP : null
      });
    }
    return points;
  }, [demandShift, supplyShift]);

  // Fixed Y-Axis domain to ensure visual consistency. 
  // This allows users to clearly see the magnitude of shifts relative to a static background.
  // Max price calculation: Supply Intercept (10) - Shift (-50) + Slope(1)*Q(100) = 160.
  // Adding padding to 180.
  const FIXED_DOMAIN_MAX = 180;

  return (
    <div className="w-full h-[400px] bg-white rounded-xl shadow-inner border border-slate-200 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="q" 
            label={{ value: 'Quantity (Q)', position: 'insideBottomRight', offset: -10, fill: '#64748b' }} 
            type="number"
            domain={[0, 100]}
            stroke="#94a3b8"
          />
          <YAxis 
            label={{ value: 'Price ($)', angle: -90, position: 'insideLeft', fill: '#64748b' }} 
            domain={[0, FIXED_DOMAIN_MAX]}
            stroke="#94a3b8"
          />
          <Tooltip 
            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
            labelFormatter={(label) => `Quantity: ${label}`}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          
          {/* Demand Curve */}
          <Line 
            type="monotone" 
            dataKey="demand" 
            stroke="#3b82f6" 
            strokeWidth={3} 
            dot={false} 
            name="Demand"
            animationDuration={500}
          />
          
          {/* Supply Curve */}
          <Line 
            type="monotone" 
            dataKey="supply" 
            stroke="#ef4444" 
            strokeWidth={3} 
            dot={false} 
            name="Supply"
            animationDuration={500}
          />

          {/* Equilibrium Point */}
          <ReferenceDot 
            x={equilibrium.quantity} 
            y={equilibrium.price} 
            r={6} 
            fill="#8b5cf6" 
            stroke="#fff" 
            strokeWidth={2}
          />
          
          {/* Guidelines to Axes */}
          <ReferenceLine x={equilibrium.quantity} stroke="#8b5cf6" strokeDasharray="3 3">
            <Label value={`Q*=${equilibrium.quantity.toFixed(1)}`} position="insideBottomLeft" fill="#8b5cf6" fontSize={12} />
          </ReferenceLine>
          <ReferenceLine y={equilibrium.price} stroke="#8b5cf6" strokeDasharray="3 3">
             <Label value={`P*=$${equilibrium.price.toFixed(2)}`} position="insideTopLeft" fill="#8b5cf6" fontSize={12} />
          </ReferenceLine>

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketGraph;