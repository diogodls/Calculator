import { createContext, ReactNode, useState } from 'react';
import { verifyLastCharacter } from '../utils/verifyLastCharacter.ts';
import { SIMBOLS } from '../const/constants.ts';

interface CalculatorContextProps {
  result: string;
  history: string[];
  calculateResult: () => void;
  updateResult: (newValue: string) => void;
  clearResult: () => void;
}

interface CalculatorProviderProps {
  children: ReactNode;
}

export const CalculatorContext = createContext({} as CalculatorContextProps);

const CalculatorProvider = ({children}: CalculatorProviderProps) => {
  const [result, setResult] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);

  const calculateResult = () => {
    const unterminedExpression = verifyLastCharacter(result);
    if (unterminedExpression) return alert('Você não pode finalizar uma expressão com um símbolo.');

    const formattedResult = `${eval(result)}`;
    setResult(formattedResult);
    setHistory((history) => [...history, `${result} = ${formattedResult}`]);
  };

  const updateResult = (newValue: string) => {
    let formattedValue: string;

    if (SIMBOLS.includes(result.substring(result.length - 1)) && SIMBOLS.includes(newValue)) {
      formattedValue = result.slice(0, -1) + newValue;
    }

    setResult((result) => formattedValue ?? (result + newValue));
  };

  const clearResult = () => {
    setResult('');
  };

  return (
    <CalculatorContext.Provider value={{result, history, calculateResult, updateResult, clearResult}}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;