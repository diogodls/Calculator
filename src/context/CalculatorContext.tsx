import {createContext, ReactNode, useState} from 'react';

interface CalculatorContextProps {
  result: number;
  updateResult: (newResult: number) => void;
}

interface CalculatorProviderProps {
  children: ReactNode;
}

export const CalculatorContext  = createContext({} as CalculatorContextProps);

const CalculatorProvider = ({children}: CalculatorProviderProps) => {
  const [result, setResult] = useState<number>(0);

  const updateResult = (newNumber: number) => {
    setResult(newNumber);
  }
  return (
    <CalculatorContext.Provider value={{result, updateResult}}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;