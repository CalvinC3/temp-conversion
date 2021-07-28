import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import MainPage from './pages/MainPage'

const LightTheme = {
  backgroundColor: 'white',
  color: 'black',
  buttonToggler: {
    backgroundColor: '#252d31',
    color: 'white',
    borderColor: 'white',
    hoverBG: '#2e465d',
  },
  boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)'
}

const DarkTheme = {
  backgroundColor: '#282c34',
  color: 'white',
  buttonToggler: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'black',
    hoverBG: '#5684b1',
  },
  boxShadow: '0 4px 8px 0 rgb(255 255 255 / 20%), 0 6px 20px 0 rgb(255 255 255 / 19%)'
  
}

const themes = {
  light: LightTheme,
  dark: DarkTheme
}

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeProvider className='App' theme={themes[theme]}>
      <MainPage theme={theme} setTheme={setTheme}/>
    </ThemeProvider>
  );
}

export default App;
