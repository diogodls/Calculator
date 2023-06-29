import styled from 'styled-components';
import React, { useState } from 'react';

const CompoundCalculator = () => {
  const [initialCapital, setInitialCapital] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [applicationTime, setApplicationTime] = useState<number>(0);

  const updateCompoundCalculatorValues = (e: React.ChangeEvent<HTMLInputElement>, setValue:  React.Dispatch<React.SetStateAction<number>>) => {
    setValue(+e.target.value);
  };

  return (
    <CompoundCalculatorStyles>
      <input type={'number'} value={initialCapital} onChange={(e) => updateCompoundCalculatorValues(e, setInitialCapital)}/>
      <input type={'number'} value={interestRate} onChange={(e) => updateCompoundCalculatorValues(e, setInterestRate)}/>
      <input type={'number'} value={applicationTime} onChange={(e) => updateCompoundCalculatorValues(e, setApplicationTime)}/>
    </CompoundCalculatorStyles>
  );
};

const CompoundCalculatorStyles = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
`;

export default CompoundCalculator;