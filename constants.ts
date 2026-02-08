import { Scenario, PracticeQuestion } from './types';

export const BASE_DEMAND_INTERCEPT = 100;
export const BASE_DEMAND_SLOPE = 1;
export const BASE_SUPPLY_INTERCEPT = 10;
export const BASE_SUPPLY_SLOPE = 1;

export const SCENARIOS: Scenario[] = [
  {
    id: 'baseline',
    title: 'Market Equilibrium',
    emoji: '⚖️',
    description: 'The starting point where supply meets demand.',
    demandShift: 0,
    supplyShift: 0,
    explanation: 'At equilibrium, quantity demanded equals quantity supplied. All other factors are held constant.'
  },
  {
    id: 'income-normal-up',
    title: 'Income Rise (Normal)',
    emoji: '💰',
    description: 'A growing economy increases consumer incomes for organic produce.',
    demandShift: 25,
    supplyShift: 0,
    explanation: 'For a normal good, an increase in income leads to an increase in demand. The curve shifts RIGHT.'
  },
  {
    id: 'income-inferior-up',
    title: 'Income Rise (Inferior)',
    emoji: '🍜',
    description: 'Incomes rise, so people buy fewer generic instant noodles.',
    demandShift: -20,
    supplyShift: 0,
    explanation: 'For an inferior good, an increase in income leads to a decrease in demand. The curve shifts LEFT.'
  },
  {
    id: 'substitute-price-up',
    title: 'Substitute Price Hiked',
    emoji: '☕',
    description: 'The price of Coffee rises significantly; what happens to the Tea market?',
    demandShift: 20,
    supplyShift: 0,
    explanation: 'Coffee and Tea are substitutes. When the price of coffee rises, demand for tea increases. Shift RIGHT.'
  },
  {
    id: 'complement-price-up',
    title: 'Complement Price Hiked',
    emoji: '🚗',
    description: 'Gasoline prices surge; what happens to the SUV market?',
    demandShift: -25,
    supplyShift: 0,
    explanation: 'Gas and SUVs are complements. An increase in the price of gas leads to a decrease in demand for SUVs. Shift LEFT.'
  },
  {
    id: 'tastes-positive',
    title: 'Tastes: Positive Shift',
    emoji: '🤳',
    description: 'A viral health trend makes avocados extremely popular.',
    demandShift: 30,
    supplyShift: 0,
    explanation: 'A positive change in tastes and preferences increases demand. The curve shifts RIGHT.'
  },
  {
    id: 'expect-future-p-up',
    title: 'Buyer Expectations',
    emoji: '📅',
    description: 'Consumers expect the price of laptops to double next month.',
    demandShift: 20,
    supplyShift: 0,
    explanation: 'If consumers expect higher future prices, their current demand increases. Shift RIGHT.'
  },
  {
    id: 'num-buyers-up',
    title: 'Number of Buyers',
    emoji: '📈',
    description: 'A massive population surge in a college town increases housing demand.',
    demandShift: 35,
    supplyShift: 0,
    explanation: 'An increase in the number of buyers in the market shifts the demand curve to the RIGHT.'
  },
  {
    id: 'input-price-up',
    title: 'Input Prices Rise',
    emoji: '🏭',
    description: 'The price of steel used to build cars increases significantly.',
    demandShift: 0,
    supplyShift: -30,
    explanation: 'Higher input prices make production less profitable, decreasing supply. Shift LEFT.'
  },
  {
    id: 'tech-improvement',
    title: 'Technology: Efficiency',
    emoji: '🤖',
    description: 'A new robotic assembly line reduces costs for smartphone makers.',
    demandShift: 0,
    supplyShift: 30,
    explanation: 'Improvements in technology increase efficiency and reduce costs, increasing supply. Shift RIGHT.'
  },
  {
    id: 'seller-expect-up',
    title: 'Seller Expectations',
    emoji: '📦',
    description: 'Farmers expect wheat prices to triple next month and hold back stock.',
    demandShift: 0,
    supplyShift: -20,
    explanation: 'If sellers expect higher future prices, they may reduce current supply to sell later. Shift LEFT.'
  },
  {
    id: 'num-sellers-up',
    title: 'Number of Sellers',
    emoji: '🏪',
    description: 'Four new competing bakeries open on the same street.',
    demandShift: 0,
    supplyShift: 25,
    explanation: 'An increase in the number of sellers in a market increases market supply. Shift RIGHT.'
  },
  {
    id: 'income-recession-normal',
    title: 'Recession (Normal Good)',
    emoji: '📉',
    description: 'Widespread unemployment reduces spending on luxury watches.',
    demandShift: -30,
    supplyShift: 0,
    explanation: 'In a recession, incomes fall. For normal goods, demand decreases. Shift LEFT.'
  },
  {
    id: 'tech-natural-disaster',
    title: 'Input: Resource Scarcity',
    emoji: '⛈️',
    description: 'A frost destroys 50% of the orange crop in Florida.',
    demandShift: 0,
    supplyShift: -40,
    explanation: 'A decrease in the availability of inputs (or natural disaster) reduces supply. Shift LEFT.'
  },
  {
    id: 'substitute-price-down',
    title: 'Substitute Price Drop',
    emoji: '📱',
    description: 'Tablet prices fall by 50%; what happens to the Laptop market?',
    demandShift: -20,
    supplyShift: 0,
    explanation: 'If a substitute (Tablets) becomes cheaper, people switch to it, decreasing demand for Laptops. Shift LEFT.'
  }
];

export const PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    id: 'q1',
    question: 'The price of sugar (an input for candy) increases. How does this affect the Candy market?',
    hint: 'Sugar is a factor of production.',
    correctDemand: 'none',
    correctSupply: 'decrease',
    explanation: 'Higher input prices shift the Supply curve to the LEFT.'
  },
  {
    id: 'q2',
    question: 'A massive marketing campaign makes a specific brand of sneakers "cool." Show the effect.',
    hint: 'This relates to consumer tastes.',
    correctDemand: 'increase',
    correctSupply: 'none',
    explanation: 'Positive change in tastes shifts the Demand curve to the RIGHT.'
  },
  {
    id: 'q3',
    question: 'New automated software allows tax firms to process returns in half the time.',
    hint: 'This is an advancement in technology.',
    correctDemand: 'none',
    correctSupply: 'increase',
    explanation: 'Better technology increases efficiency, shifting Supply to the RIGHT.'
  },
  {
    id: 'q4',
    question: 'Consumer incomes rise, and we are looking at the market for "Store Brand Bread" (an Inferior Good).',
    hint: 'Remember the definition of an Inferior Good.',
    correctDemand: 'decrease',
    correctSupply: 'none',
    explanation: 'For inferior goods, higher income leads to lower demand. Shift LEFT.'
  },
  {
    id: 'q5',
    question: 'The price of Hot Dog Buns increases. What happens to the market for Hot Dogs?',
    hint: 'Hot dogs and buns are often consumed together.',
    correctDemand: 'decrease',
    correctSupply: 'none',
    explanation: 'Buns and Hot Dogs are complements. A price rise in one decreases demand for the other. Shift LEFT.'
  },
  {
    id: 'q6',
    question: 'Sellers of oil expect that oil prices will be much higher next month than they are today.',
    hint: 'This is about producer expectations.',
    correctDemand: 'none',
    correctSupply: 'decrease',
    explanation: 'Producers will withhold supply today to sell for more tomorrow. Current Supply shifts LEFT.'
  },
  {
    id: 'q7',
    question: 'A large number of new families move into a small town. How does this affect the local Grocery market?',
    hint: 'This changes the number of buyers.',
    correctDemand: 'increase',
    correctSupply: 'none',
    explanation: 'More buyers in the market shifts the Demand curve to the RIGHT.'
  },
  {
    id: 'q8',
    question: 'The government removes regulations, allowing many new firms to enter the electricity market.',
    hint: 'This increases the number of sellers.',
    correctDemand: 'none',
    correctSupply: 'increase',
    explanation: 'More sellers in the market shifts the Supply curve to the RIGHT.'
  },
  {
    id: 'q9',
    question: 'The price of beef falls. What happens to the market for Chicken?',
    hint: 'Beef and Chicken are alternative meat sources.',
    correctDemand: 'decrease',
    correctSupply: 'none',
    explanation: 'Beef and Chicken are substitutes. A cheaper substitute pulls buyers away, shifting Chicken Demand LEFT.'
  },
  {
    id: 'q10',
    question: 'Wages for factory workers (an input cost) decrease significantly.',
    hint: 'Labor is a primary input price.',
    correctDemand: 'none',
    correctSupply: 'increase',
    explanation: 'Lower input costs make production more profitable, shifting Supply to the RIGHT.'
  },
  {
    id: 'q11',
    question: 'Consumers expect their incomes to fall next year due to a predicted recession.',
    hint: 'This is about buyer expectations of future income.',
    correctDemand: 'decrease',
    correctSupply: 'none',
    explanation: 'Expectations of lower future income reduce current demand for normal goods. Shift LEFT.'
  },
  {
    id: 'q12',
    question: 'A new government tax is placed on every unit of pollution produced by coal plants.',
    hint: 'Taxes on production act like an increase in input prices.',
    correctDemand: 'none',
    correctSupply: 'decrease',
    explanation: 'Taxes increase the cost of doing business, shifting the Supply curve to the LEFT.'
  },
  {
    id: 'q13',
    question: 'A study is released showing that eating blueberries prevents heart disease.',
    hint: 'This shifts consumer tastes.',
    correctDemand: 'increase',
    correctSupply: 'none',
    explanation: 'Positive information improves tastes, shifting Demand to the RIGHT.'
  },
  {
    id: 'q14',
    question: 'The price of electric car batteries (a key component) drops by 40%.',
    hint: 'Batteries are an input for electric cars.',
    correctDemand: 'none',
    correctSupply: 'increase',
    explanation: 'Lower input prices increase the profitability of production, shifting Supply RIGHT.'
  },
  {
    id: 'q15',
    question: 'The price of movie tickets falls. How does this affect the demand for Popcorn sold at the theater?',
    hint: 'Consider the relationship between movies and popcorn.',
    correctDemand: 'increase',
    correctSupply: 'none',
    explanation: 'Movies and Popcorn are complements. Cheaper movies lead to more demand for popcorn. Shift RIGHT.'
  },
  {
    id: 'q16',
    question: 'A major competitor in the smartphone market goes out of business.',
    hint: 'This reduces the number of sellers.',
    correctDemand: 'none',
    correctSupply: 'decrease',
    explanation: 'Fewer sellers in the market results in a decrease in market supply. Shift LEFT.'
  },
  {
    id: 'q17',
    question: 'Incomes rise, and we are looking at the market for "Used Clothing" (an Inferior Good).',
    hint: 'Think about what happens to inferior goods as people get wealthier.',
    correctDemand: 'decrease',
    correctSupply: 'none',
    explanation: 'Demand for inferior goods falls as income increases. Shift LEFT.'
  },
  {
    id: 'q18',
    question: 'A new invention allows farmers to harvest twice as much corn with the same amount of water.',
    hint: 'This is a technological advancement.',
    correctDemand: 'none',
    correctSupply: 'increase',
    explanation: 'Improved technology increases productivity and Supply. Shift RIGHT.'
  },
  {
    id: 'q19',
    question: 'Consumers hear a rumor that the price of gold will drop by 20% tomorrow.',
    hint: 'Expectations of future price decreases.',
    correctDemand: 'decrease',
    correctSupply: 'none',
    explanation: 'If buyers expect lower prices tomorrow, they wait to buy. Current Demand shifts LEFT.'
  },
  {
    id: 'q20',
    question: 'A strike by factory workers significantly increases the hourly wage for making bicycles.',
    hint: 'Higher wages mean higher input prices.',
    correctDemand: 'none',
    correctSupply: 'decrease',
    explanation: 'Increased labor costs shift the Supply curve to the LEFT.'
  }
];