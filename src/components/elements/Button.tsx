import styled from 'styled-components';
import { useContext } from 'react';
import { CalculatorContext } from '../../context/CalculatorContext.tsx';

interface ButtonProps {
  label: string,
  value?: string,
  onClick?: () => void,
  style?: object,
}

const Button = ({label, value, style, onClick}: ButtonProps) => {
  const { updateResult } = useContext(CalculatorContext);

  const setResult = () => {
    if (!value) return;
    updateResult(value);
  };

  return (
    <CalculatorButton onClick={onClick ?? setResult} style={style}>
      {label}
    </CalculatorButton>
  );
};

const CalculatorButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 35px;
  padding-block: 25px;
  min-width: 50px;
  background: var(--primary-color);
  border: 2px solid var(--secondary-color);
  border-radius: var(--border-radius);
  color: var(--color);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 1em;
  transition: .5s;

  &:hover {
    border: 2px solid #0C8CE9;
  }

  &:active {
    transform: scale(1.2);
  }
`;

export default Button;