import React, {createContext, ReactNode, useState} from 'react';

interface CalculatorContextProps {
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
  calculateResult: () => void;
  clearResult: () => void;
}

interface CalculatorProviderProps {
  children: ReactNode;
}

export const CalculatorContext  = createContext({} as CalculatorContextProps);

const CalculatorProvider = ({children}: CalculatorProviderProps) => {
  const [result, setResult] = useState<string>('');

  const calculateResult = () => {
    setResult((result) => eval(result));
  };

  const clearResult = () => {
    setResult('');
  }

  return (
    <CalculatorContext.Provider value={{result, setResult, calculateResult, clearResult}}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;