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
  padding: 25px;
  border: 1px solid #5D5FEF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: #201A1A;
`

export default Button;