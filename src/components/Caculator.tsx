import Output from "./elements/Output.tsx";
import styled from "styled-components";
import Buttons from "./Buttons.tsx";

const Calculator = () => {
  return (
    <CalculatorStyle>
      <Output/>
      <Buttons />
    </CalculatorStyle>
  );
};

const CalculatorStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--calculator-width);
  display: flex;
  flex-flow: column;
  gap: 15px;
`

export default Calculator;