import { useContext } from 'react';
import styled from 'styled-components';
import { CalculatorContext } from '../context/CalculatorContext.tsx';

const History = () => {
  const { history } = useContext(CalculatorContext);

  return (
    <Column>
      <h3 style={{color: 'var(--color)'}}>Histórico:</h3>
      <HistoryStyles>

        {history.map((item, index) => (
          <HistoryItemStyles key={index}>{item}</HistoryItemStyles>
        ))}
      </HistoryStyles>
    </Column>
  );
};

const HistoryStyles = styled.div`
  color: var(--color);
  border-radius: var(--border-radius);
  border: 2px solid var(--terciary-color);
  display: flex;
  flex-flow: column;
  gap: 15px;
  width: var(--calculator-width);
  justify-content: flex-start;
  align-items: center;
  padding-block: 15px;
  height: 370px;
  max-height: 370px;
  overflow: auto;
`;

const HistoryItemStyles = styled.span`
  height: 1em;
`;

const Column = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
`;

export default History;