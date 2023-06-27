import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.tsx";
import styled from "styled-components";

const History = () => {
  const {history} = useContext(CalculatorContext);

  return (
    <HistoryStyles>
      {history.map((item) => (
        <span>{item}</span>
      ))}
    </HistoryStyles>
  );
};

const HistoryStyles = styled.div`
  position: absolute;
  top: 36%;
  left: 70%;
  transform: translate(-10%, -30%);
  padding: 50px;
  color: var(--color);
  border-radius: var(--border-radius);
  border: 2px solid var(--terciary-color);
  display: flex;
  flex-flow: column;
  gap: 15px;
  width: 300px;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  max-height: 40vh;
  overflow: auto;
`

export default History;