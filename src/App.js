import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import MainPage from './pages/MainPage'

const LightTheme = {
  backgroundColor: 'white',
  color: 'black'
}

const DarkTheme = {
  backgroundColor: '#282c34',
  color: 'white'
  
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
