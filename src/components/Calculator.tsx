import styled from 'styled-components';
import Output from './elements/Output.tsx';
import Buttons from './Buttons.tsx';

const Calculator = () => {

  return (
    <CalculatorStyle>
      <Output/>
      <Buttons/>
    </CalculatorStyle>
  );
};

const CalculatorStyle = styled.div`
  width: var(--calculator-width);
  display: flex;
  flex-flow: column;
  gap: 15px;
`;

export default Calculator;