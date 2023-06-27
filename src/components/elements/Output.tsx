import styled from "styled-components";
import {useContext} from "react";
import {CalculatorContext} from "../../context/CalculatorContext.tsx";

const Output = () => {
  const {result} = useContext(CalculatorContext)
  return (
    <OutputStyles>
      <div style={{paddingInline: '20px'}}>
        <span>{result}</span>
      </div>
    </OutputStyles>
  );
};

const OutputStyles = styled.div`
  padding-block: 35px;
  width: calc(var(--calculator-width) - 6px);
  display: flex;
  justify-content: right;
  border: 2px solid var(--output-border-color);
  border-radius: var(--border-radius);
  color: var(--color);
`

export default Output;