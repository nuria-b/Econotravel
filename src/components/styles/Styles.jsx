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
    background: var(--bg-button);
    border: var(--border);
    color: var(--font-color-2);
    padding: 0.5em 5.5em;
    box-shadow: 0 0.4em 0.4em -0.4em #000000;
    margin: 0.5em 0 2em 0;

    &:hover{
        background: var(--hover-primary);
    }
`

export const LabelForm = styled.label`
    color: var(--font-color-l);
    font-size: 2vmin;
`

export const InputForm = styled.input`
    background: none;
    color: var(--font-color);
    border: none;
    border-bottom: 0.1em solid #c4c8b3;
    font-size: 2.5vmin;
    text-indent: 0.5em;  
`

export const HeroImg = styled.section`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;
`

export const TextHero = styled.p`
    text-align: center;
    position: absolute;
    transform: translate(-50%, -50%);
`

/*--- Navbar ---*/
export const NavStyle = styled(FlexRow)`
    justify-content: space-evenly;
    background: var(--bg-nav);
    //position: fixed;
    width: 100%;

    img{
        height: 10em;
    }

    button{
        background: none;
        border: none; 
        cursor: pointer;
    }
`

export const SearchBar = styled(FlexRow)` 
    background: var(--bg-input-search);
    box-shadow: 0 0.4em 0.4em -0.5em var(--color-boxShadow);
    gap: 0;

    input{      
        text-indent: 0.5em; 
        background: none;
        border: none;
        width: 60vmin;
        height: 3em;
    }
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
    border: 0.1em solid var(--border); 
    padding: 2em;
    width: 20em;

    h2{
        color: var(--font-color-pay);
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
  stroke-width: 0.5em;
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

/*--- Search ---*/

export const GridSearch = styled.section`
    display: grid;
    grid-template-rows: repeat(3, 100%);
    grid-template-columns: repeat(3, 15em);
    justify-content: center;
    align-items: center;
    place-items: center;
    column-gap: 6em;
    row-gap: 5em;
    margin-top: 2em;
    margin-bottom: 2em;
    margin-left: 4em;
    margin-right: 4em;
    
    @media (max-width: 1200px) {
        &{
            grid-template-rows: repeat(2, 100%);
            grid-template-columns: repeat(2, 15em);
            column-gap: 6em;
        }
    }

    @media (max-width: 700px) {
        &{
            grid-template-rows: repeat(1, 100%);
            grid-template-columns: repeat(1, 15em);
        }
    }   
  
`

export const ContainerImg = styled.section`
    position: relative;
    text-align: center;
    width: 249px; 
    height: 381px;
    margin-bottom: 1em;

    &:hover{
        background-color: var(--hover-secondary);
    }
` 

export const ImgExp = styled.img`
    width: 249px; 
    height: 381px;
    opacity: 1;
    transition: opacity .5s;
    &:hover {
        opacity: 0.5;
    }
`

export const TitleExp = styled.h4`
    color: var(--font-color-2);
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`

export const ContainerExp = styled.section`
    width: 15.55em;  
`

export const TagsExp = styled(FlexRow)`
    justify-content: space-between;
`

export const ContainerBtExp = styled.section`
    display: flex;
    gap: 0.5em;

    button{
        width: 6em;
    };
`
export const FilterExp = styled(FlexRow)`
    justify-content: center;
    margin: 2em;

    .link{
        color: var(--font-color-3);
        text-decoration: underline 0.1em;
        text-underline-offset: 0.5em;

        &:hover{
            opacity: 0.5;
        }
    }
`

/*--- WhoWeAre ---*/
export const ContainerW= styled(FlexRow)`
    justify-content: center;
`

export const ProfileW = styled(FlexColumn)`
    align-items: center;
    
    img{
        width: 15.55em;
    }
`

export const InfoW = styled.section`
   
`
/*--- Footer ---*/
export const FooterElements = styled(FlexRow)`
    justify-content:center;
    background: var(--bg-footer);
    height: 4em;

    .link{
        color: var(--font-color-2);
        text-decoration: none;
    }   
`

