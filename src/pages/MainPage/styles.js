import styled from 'styled-components'

export const PageWrapper = styled.div`
  .App-header {
    width: 40vw;
    min-height: 8vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 18px;
    font-size: calc(10px + 2vmin);
    color: ${props => props.theme.color};
    transition: all .5s ease;

    button {
      min-height: 5vh;
      font-size: 18px;
      width: auto;
      padding: 10px 10px;
      border-radius: 8px;
      background: ${props => props.theme.buttonToggler.backgroundColor};
      color: ${props => props.theme.buttonToggler.color};
      border-color: ${props => props.theme.buttonToggler.borderColor};
      transition: all .5s ease;

      :hover {
        background-color:  ${props => props.theme.buttonToggler.hoverBG};
        color: white;
      }
}
    }
  }

  .App-link {
    color: #61dafb;
  }

  .App-body {
    background-color: ${props => props.theme.backgroundColor};
    min-height: 92vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(5px + 2vmin);
    color: ${props => props.theme.color};
    transition: all .5s ease;

  }

`

export const ThermoWrapper = styled.div`
  min-height: 30vh;
  width: 40vw;
  border-radius: 18px;
  padding: 10px;
  box-shadow: ${props => props.theme.boxShadow};
  transition: all .05s ease;

  
`

export const ContentBoxFlex = styled.div`
  margin: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  .left {
    width: 50%
    
    label {
      padding: 10px;
    }

  }

  .right {
    width: 50%;
    text-align: center
  }

`

export const StyledFormGroup = styled.div`
  margin: 12px 0px;

  input[type=text] {
  padding:10px;
  margin:10px 0; // add top and bottom margin
  padding: 10px;
  /* border-radius: 15px; */
  }

`

export const StyledTextDisplay = styled.div`
  small {
    font-size: calc(8px + 1vmin);
  }
`