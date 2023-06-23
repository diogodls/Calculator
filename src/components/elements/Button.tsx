import styled from 'styled-components';

interface ButtonProps {
  value: string,
  label: string,
  onClick: () => void,
}

const Button = ({label, onClick}: ButtonProps) => {
  return (
    <CalculatorButton onClick={onClick}>
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