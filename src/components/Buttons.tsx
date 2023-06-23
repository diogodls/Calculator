import styled from "styled-components";
import Button from "./elements/Button.tsx";

const Buttons = () => {
  return (
    <ButtonsStyles>
      <Button label={'1'} value={'1'} onClick={() => console.log('clico')}/>
      <Button label={'2'} value={'1'} onClick={() => console.log('clico')}/>
      <Button label={'3'} value={'1'} onClick={() => console.log('clico')}/>
      <Button label={'4'} value={'1'} onClick={() => console.log('clico')}/>
      <Button label={'5'} value={'1'} onClick={() => console.log('clico')}/>
      <Button label={'6'} value={'1'} onClick={() => console.log('clico')}/>
      <Button label={'7'} value={'1'} onClick={() => console.log('clico')}/>
      <Button label={'8'} value={'1'} onClick={() => console.log('clico')}/>
      <Button label={'9'} value={'1'} onClick={() => console.log('clico')}/>
    </ButtonsStyles>
  );
};

const ButtonsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: var(--calculator-width);
  gap: 12px;
`

export default Buttons;