import styled from 'styled-components';
import {useContext} from "react";
import {CalculatorContext} from "../../context/CalculatorContext.tsx";

interface ButtonProps {
  label: string,
  value?: string,
  onClick?: () => void,
  style?: object,
}

const Button = ({label, value, style, onClick}: ButtonProps) => {
  const { updateResult } = useContext(CalculatorContext);

  const setResult = () => {
    if(!value) return;
    updateResult(value);
  }

  return (
    <CalculatorButton onClick={onClick ?? setResult} style={style}>
      {label}
    </CalculatorButton>
  );
}

const CalculatorButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 35px;
  padding-block: 25px;
  border: 2px solid #5D5FEF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius);
  background: #201A1A;
  color: var(--color);
  font-size: 1em;
  cursor: pointer;
  min-width: 50px;
  
  &:hover{
    border: 2px solid #0C8CE9;
  }
`

export default Button;