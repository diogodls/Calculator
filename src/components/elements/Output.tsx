import { useContext } from 'react';
import styled from 'styled-components';
import { CalculatorContext } from '../../context/CalculatorContext.tsx';

const Output = () => {
  const { result } = useContext(CalculatorContext);

  return (
    <OutputStyles>
      <ResultStyles>{result}</ResultStyles>
    </OutputStyles>
  );
};

const OutputStyles = styled.div`
  padding-block: 35px;
  width: calc(var(--calculator-width) - 6px);
  display: flex;
  justify-content: right;
  border: 2px solid var(--terciary-color);
  border-radius: var(--border-radius);
  color: var(--color);
`;

const ResultStyles = styled.span`
  padding-inline: 20px;
  height: 1em;
`;

export default Output;