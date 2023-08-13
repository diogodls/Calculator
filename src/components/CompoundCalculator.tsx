import styled from 'styled-components';
import {ChangeEvent, Dispatch, SetStateAction, useContext, useState} from 'react';
import Button from './elements/Button.tsx';
import {CalculatorContext} from '../context/CalculatorContext.tsx';

const CompoundCalculator = () => {
  const { amount, calculateCompoundInterest, setCalculatorOpen } = useContext(CalculatorContext);
  const [initialCapital, setInitialCapital] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [applicationTime, setApplicationTime] = useState<number>(0);

  const updateCompoundCalculatorValues = (e: ChangeEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<number>>) => {
    setValue(+e.target.value);
  };

  return (
    <CompoundCalculatorStyles>
      <FieldStyles>
        <LabelStyles htmlFor={'initialCapital'}>Capital Inicial (R$):</LabelStyles>
        <InputStyles type={'text'} name={'initialCapital'} value={initialCapital} onChange={(e) => updateCompoundCalculatorValues(e, setInitialCapital)}/>
      </FieldStyles>

      <FieldStyles>
        <LabelStyles htmlFor={'interestRate'}>Taxa de juros:</LabelStyles>
        <InputStyles type={'text'} name={'interestRate'} value={interestRate} onChange={(e) => updateCompoundCalculatorValues(e, setInterestRate)}/>
      </FieldStyles>

      <FieldStyles>
        <LabelStyles htmlFor={'applicationTime'}>Tempo de aplicação em meses:</LabelStyles>
        <InputStyles type={'text'} name={'applicationTime'} value={applicationTime} onChange={(e) => updateCompoundCalculatorValues(e, setApplicationTime)}/>
      </FieldStyles>

      <span>Resultado: R${amount}</span>
      <Button label={'Calcular'} style={CalculateStyles} onClick={() => calculateCompoundInterest(initialCapital, interestRate, applicationTime)}/>
      <Button label={'Voltar'} style={BackButton} onClick={() => setCalculatorOpen(true)}/>
    </CompoundCalculatorStyles>
  );
};

const CompoundCalculatorStyles = styled.div`
  display: flex;
  flex-flow: column;
  gap: 25px;
  width: calc(var(--calculator-width) - 100px);
  border: 2px solid var(--secondary-color);
  border-radius: var(--border-radius);
  padding: 20px 15px;
  background: var(--primary-color);
  color: var(--color);
`;

const InputStyles = styled.input`
  background: var(--primary-color);
  padding: 15px;
  border-radius: var(--border-radius);
  height: 1em;
  border: 2px solid var(--terciary-color);
  color: var(--color);
`;

const FieldStyles = styled.div`
  display: flex;
  flex-flow: column;
  gap: 5px;
`;

const LabelStyles = styled.label`
  margin-left: 5px;
`;

const CalculateStyles = {
  backgroundColor: 'var(--secondary-color)',
  fontWeight: '400',
  fontSize: '1.1em',
  padding: '15px',
};

const BackButton = {
  padding: '12px',
};

export default CompoundCalculator;