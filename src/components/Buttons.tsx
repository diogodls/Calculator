import styled from "styled-components";
import Button from "./elements/Button.tsx";
import {useContext} from "react";
import {CalculatorContext} from "../context/CalculatorContext.tsx";

const Buttons = () => {
  const { clearResult, calculateResult } = useContext(CalculatorContext);

  return (
    <ButtonsStyles>
      <Columns>
        <Button label={'C'} value={''} onClick={clearResult}/>
        <Button label={'7'} value={'7'}/>
        <Button label={'4'} value={'4'}/>
        <Button label={'1'} value={'1'}/>
      </Columns>

      <Columns>
        <Button label={'('} value={'('}/>
        <Button label={'8'} value={'8'}/>
        <Button label={'5'} value={'5'}/>
        <Button label={'2'} value={'2'}/>
        <Button label={'0'} value={'0'}/>
      </Columns>

      <Columns>
        <Button label={')'} value={')'}/>
        <Button label={'9'} value={'9'}/>
        <Button label={'6'} value={'6'}/>
        <Button label={'3'} value={'3'}/>
        <Button label={','} value={','}/>
      </Columns>

      <Columns>
        <Button label={'/'} value={'/'}/>
        <Button label={'*'} value={'*'}/>
        <Button label={'-'} value={'-'}/>
        <Button label={'+'} value={'+'}/>
        <Button label={'='} value={''} style={SubmitButtonStyle} onClick={() => calculateResult()}/>
      </Columns>
    </ButtonsStyles>
  );
};

const ButtonsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: var(--calculator-width);
  gap: 11px;
`

const Columns = styled.div`
  display: flex;
  flex-flow: column;
  gap: 11px;
`
const SubmitButtonStyle = {
  backgroundColor: '#5D5FEF',
}
export default Buttons;