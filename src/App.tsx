import { useContext } from 'react';
import styled from 'styled-components';
import './App.css';
import './styles/variables.css';
import Calculator from './components/Calculator.tsx';
import History from './components/History.tsx';
import { CalculatorContext } from './context/CalculatorContext.tsx';
import CompoundCalculator from './components/CompoundCalculator.tsx';
import {SCREEN_SIZES} from './const/constants.ts';

function App() {
  const { calculatorOpen } = useContext(CalculatorContext);

  return (
    <AppStyles>
      <AppSectionStyles>
        {calculatorOpen ? <Calculator/> : <CompoundCalculator />}
        {calculatorOpen ? <History/> : <></>}
      </AppSectionStyles>
    </AppStyles>
  );
}

const AppStyles = styled.section`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${SCREEN_SIZES.MOBILE}) {
    height: 100vh;
  }
`;

const AppSectionStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
  
  @media (max-width: ${SCREEN_SIZES.MOBILE}) {
    flex-flow: column;
    padding-block: 20px;
  }
`;

export default App;
