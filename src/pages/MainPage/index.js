import React from 'react'
import ViewContainer from './container'

// styles below
import {PageWrapper, ThermoWrapper, ContentBoxFlex, StyledFormGroup, StyledTextDisplay} from './styles'
// import below all needed components

const View = (props) => (
  <ViewContainer>
    {({
      celcius,
      setCelcius,
      farenheit,
      setFarenheit,
      graphic,
      convertTemp,
    }) => (
      <PageWrapper>
       <div className='App-body'>
          <header className='App-header'>
            <button
             onClick={() => 
              props.theme === 'light' ? props.setTheme('dark') : props.setTheme('light') 
             }>
            {
              props.theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"  
            }
            </button>
            {/* insert theme toggle here */}
          </header>
         <ThermoWrapper className='wrapper'>
          
            <p>How to use: Input value on the field then press enter</p>
            <ContentBoxFlex>
              <div className='left'>
                <StyledFormGroup>
                  <label>Celcius:</label><br/>
                  <input 
                    type="text" 
                    name="celcius"
                    onChange={e => setCelcius(e.target.value)}
                    onBlur={(e) => convertTemp('celcius', e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' ? convertTemp('celcius', e.target.value) : ''}
                    value={celcius ? celcius: ''}
                    defaultValue={celcius}
                  />
                </StyledFormGroup>
                <StyledFormGroup>
                  <label>Farenheit:</label><br/>
                  <input 
                    type="text" 
                    name="celcius"
                    onChange={(e) => setFarenheit(e.target.value)}
                    onBlur={(e) => convertTemp('farenheit', e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' ? convertTemp('farenheit', e.target.value) : ''}
                    value={farenheit ? farenheit: ''}
                    defaultValue={farenheit}

                  />
                </StyledFormGroup>
                <StyledTextDisplay>
                  <small>
                  Conversion guide <br/>
                  °C to °F	Multiply by 9, then divide by 5, then add 32 <br/>
                  °F to °C	Deduct 32, then multiply by 5, then divide by 9
                  </small>
                </StyledTextDisplay>
              </div>
              <div className='right'>
                  <img
                    src={graphic.icon}
                    alt={graphic.message}
                  />
                  <p className='graphic-message'>{graphic.message}</p>
              </div>
            </ContentBoxFlex>
         </ThermoWrapper>
       </div>
      </PageWrapper>
    )}
  </ViewContainer>
)

export default View