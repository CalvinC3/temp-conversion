import styled from 'styled-components'

export const PageWrapper = styled.div`

 
  .App-header {
    background-color: ${props => props.theme.backgroundColor};
    min-height: 8vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${props => props.theme.color};
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
  }

`

export const ThermoWrapper = styled.div`
  height: 30vh;
  width: 60vw;
  
`

export const ContentBoxFlex = styled.div`
  margin: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .left {
    width: 50%
  }

  .right {
    width: 50%
  }

`