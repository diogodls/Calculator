import { useContext } from 'react';
import styled from 'styled-components';
import './App.css';
import './styles/variables.css';
import Calculator from './components/Calculator.tsx';
import History from './components/History.tsx';
import { CalculatorContext } from './context/CalculatorContext.tsx';
import CompoundCalculator from './components/CompoundCalculator.tsx';

function App() {
  const { calculatorOpen } = useContext(CalculatorContext);

  return (
    <AppStyles>
      <AppDivStyles>
        {calculatorOpen ? <Calculator/> : <CompoundCalculator />}
        <History/>
      </AppDivStyles>
    </AppStyles>
  );
}

const AppDivStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
`;

const AppStyles = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
