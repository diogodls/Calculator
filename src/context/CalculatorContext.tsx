import {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react';
import {verifyLastCharacter} from '../utils/verifyLastCharacter.ts';
import {SIMBOLS} from '../const/constants.ts';
import {verifyFractionDigits} from '../utils/verifyFractionDigits.ts';

interface CalculatorContextProps {
  result: string;
  calculateResult: () => void;
  updateResult: (newValue: string) => void;
  clearResult: () => void;
  history: string[];
  amount: number;
  calculatorOpen: boolean;
  setCalculatorOpen: Dispatch<SetStateAction<boolean>>;
  calculateCompoundInterest: (initialCapital: number, interestRate: number, applicationTime: number) => void;
}

interface CalculatorProviderProps {
  children: ReactNode;
}

export const CalculatorContext = createContext({} as CalculatorContextProps);

const CalculatorProvider = ({children}: CalculatorProviderProps) => {
  const [result, setResult] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [amount, setAmount] = useState<number>(0);
  const [calculatorOpen, setCalculatorOpen] = useState<boolean>(true);

  const calculateResult = () => {
    if(!result) return;
    const unterminedExpression = verifyLastCharacter(result);
    if (unterminedExpression) return alert('Você não pode finalizar uma expressão com um símbolo.');

    const formattedResult = `${eval(result)}`;

    //138
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

  const calculateCompoundInterest = (initialCapital: number, interestRate: number, applicationTime: number) => {
    const interestResult = initialCapital * ((1 + interestRate / 100)**applicationTime);

    setAmount(!verifyFractionDigits(interestResult) ? interestResult : Number(interestResult.toFixed(2)));
  };

  return (
    <CalculatorContext.Provider value={{result, history, amount, calculatorOpen, calculateResult, updateResult, calculateCompoundInterest, setCalculatorOpen, clearResult}}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;