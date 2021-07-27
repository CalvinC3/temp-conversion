import React from 'react'
import ViewContainer from './container'
// styles below
import {PageWrapper, ThermoWrapper, ContentBoxFlex} from './styles'
// import below all needed components

const View = (props) => (
  <ViewContainer>
    {({
      celcius,
      setCelcius,
      farenheit,
      setFarenheit,
      onChangeHandler
    }) => (
      <PageWrapper>
        <header className='App-header'>
          <button>Light Theme</button>
          {/* insert theme toggle here */}
       </header>
       <div className='App-body'>
         <ThermoWrapper className='bgtest4'>
            <p>Convert Celcius to Farenheit and vice-versa by inputing on the fields below</p>
            <ContentBoxFlex>
              <div className='left'>
                <div>
                  <label>Celcius:</label>
                  <input 
                    type="text" 
                    name="celcius"
                    onChange={(e) => setCelcius(e.target.value)}
                    value={celcius ? celcius: ''}
                  />
                  {/* <input 
                    type="text" 
                    name="celcius"
                    onChange={(e) => onChangeHandler('celcius', e.target.value)}
                    value={celcius ? celcius: ''}
                  /> */}
                </div>
                <div>
                  <label>Farenheit:</label>
                  <input 
                    type="text" 
                    name="celcius"
                    onChange={(e) => setFarenheit(e.target.value)}
                    value={farenheit ? farenheit: ''}
                  />
                   {/* <input
                    type="text"
                    name="farenheit"
                    onChange={(e) => onChangeHandler('farenheit', e.target.value)}
                    value={farenheit ? farenheit : ''}
                  /> */}
                </div>
              </div>
              <div className='right'>
                  Empty Space
              </div>
            </ContentBoxFlex>
         </ThermoWrapper>
       </div>
      </PageWrapper>
    )}
  </ViewContainer>
)

export default View