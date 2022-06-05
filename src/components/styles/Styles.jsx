import styled from 'styled-components'

/*--- Global ---*/ 
export const FlexRow = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
`

export const FlexColumn = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.2em;
`

export const Buttons = styled.button`
    background: #4c8055;
    border: #4c8055;
    color: white;
    padding: 0.5em 5.5em;
    box-shadow: 0 0.4em 0.4em -0.4em #000000;
    margin: 0.5em 0 2em 0;

    &:hover{
        background: lightgreen;
    }
`

export const LabelForm = styled.label`
    color: #e7e1d1;
    font-size: 2vmin;
`

export const InputForm = styled.input`
    background: none;
    color: #2d572c ;
    border: none;
    border-bottom: 0.1em solid #c4c8b3;
    font-size: 2.5vmin;
    text-indent: 0.5em;  
`

/*--- FormReservation ---*/
export const FormStyle = styled(FlexColumn)`
    justify-content: center;
    alingn-content: center;
    align-items: center;
    gap: 5em;
    
    @media screen and (min-width: 730px){
        flex-direction: row;
    }
`
export const Form1 = styled(FlexColumn)`
    gap: 1em;
`

export const Form2 = styled(FlexColumn)`
    border: 0.1em solid #c4c8b3; 
    padding: 2em;
    width: 20em;

    h2{
        color: red;
    }
`

export const LabelCheck = styled.label`
    font-size: 1.5vmin;
    margin-left: 1.5em;
    font-style: italic;
`

const StyledCheckbox = styled.section`
  width: 1em;
  background: white;
`

const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 0.2em;
  border: 0.1em solid;
  border-radius: 0.2em;
`

const CheckboxContainer = styled.section`
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5em;
`

export const Checkbox = () => (
    <CheckboxContainer>
      <StyledCheckbox>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
)
