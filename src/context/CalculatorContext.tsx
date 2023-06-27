import React, {createContext, ReactNode, useState} from 'react';
import {verifyLastCharacter} from "../utils/verifyLastCharacter.ts";
import {SIMBOLS} from "../const/constants.ts";
interface CalculatorContextProps {
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
  calculateResult: () => void;
  updateResult: (newValue: string) => void;
  clearResult: () => void;
}

interface CalculatorProviderProps {
  children: ReactNode;
}

export const CalculatorContext  = createContext({} as CalculatorContextProps);

const CalculatorProvider = ({children}: CalculatorProviderProps) => {
  const [result, setResult] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);

  const calculateResult = () => {
    const unterminedExpression = verifyLastCharacter(result);
    if(unterminedExpression) return alert('Você não pode finalizar uma expressão com um símbolo.')
    setResult((result) => `${eval(result)}`);
    setHistory((history) => [...history, result]);
  };

  const updateResult = (newValue: string) => {
    let formattedValue: string;
    console.log(result)
    //TODO: aqui trocar o resultado para o input
    if(SIMBOLS.includes(result.substring(result.length - 1)) && SIMBOLS.includes(newValue)) {
      formattedValue = result.slice(0, -1) + newValue;
    }
    setResult((result) => formattedValue ?? (result + newValue));
    // calculateResult(formattedValue ?? newValue);
  }

  const clearResult = () => {
    setResult('');
  }

  return (
    <CalculatorContext.Provider value={{result, setResult, calculateResult, updateResult, clearResult}}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;