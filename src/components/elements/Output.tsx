import styled from "styled-components";

const Output = () => {
  return (
    <OutputStyles>
      aqui vai ter os resultados
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