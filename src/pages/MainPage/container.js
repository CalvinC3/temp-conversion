import { useEffect, useState } from 'react'
import { debounce } from 'lodash'
// images
import coldIcon from '../../Assets/cold.png'
import happyIcon from '../../Assets/happy.png'
import hotIcon from '../../Assets/hot.png'
import thinkingIcon from '../../Assets/thinking.png'

const Container = ({ children }) => {
  const [initialLoad, setInitialLoad] = useState(true)
  const [celcius, setCelcius] = useState(0)
  const [farenheit, setFarenheit] = useState(0)
  const [graphic, setGraphic] = useState({
    icon: thinkingIcon,
    message: `Let's convert the temperatures`
  })
  

 // conversion guide
 // °C to °F	Multiply by 9, then divide by 5, then add 32
 // °F to °C	Deduct 32, then multiply by 5, then divide by 9


  // all methods
  const convertTemp = (origin, value) => {
    console.log('onchange handler debug', [origin, value])
    let convertedValue = 0

    // data sanitations
    value = value.replace(/[^\d.-]/g, '')

    // data conversion
    if (origin === 'celcius') {
      convertedValue = ((value * 9) / 5) + 32
      setCelcius(value)
      setFarenheit(convertedValue.toFixed(2))
    } else if (origin === 'farenheit') {
      convertedValue = ((value - 32) * 5 )/ 9
      setFarenheit(value)
      setCelcius(convertedValue.toFixed(2))
    } else {
      // error boundary
      return
    }
  }



  // all effects
  useEffect(() => {
    console.log('page on load')
    setInitialLoad(false)
  }, [])

  useEffect(() => {
    if (initialLoad) {
      // this prevents the effect to run the logic below during on page load
      return
    }

    // generates a graphical representation of the temperature
    if (celcius >= 20 && celcius <= 25) {
      setGraphic({
        icon: happyIcon,
        message: 'Ah! This is ideal!'
      })
    } else if (celcius >= 26 && celcius <= 36) {
      setGraphic({
        icon: thinkingIcon,
        message: `It's getting hot.`
      })
    } else if (celcius >= 37 && celcius <= 99) {
      setGraphic({
        icon: hotIcon,
        message: 'VERY HOT!'
      })
    } else if (celcius >= 100) {
      setGraphic({
        icon: hotIcon,
        message: `IT'S BOILING!`
      })
    } else if (celcius >= 10 && celcius < 20) {
      setGraphic({
        icon: coldIcon,
        message: 'Getting cold..'
      })
    } else if (celcius >= 1  && celcius < 10) {
      setGraphic({
        icon: coldIcon,
        message: 'Cold!...'
      })
    } else if (celcius <= 0) {
      setGraphic({
        icon: coldIcon,
        message: 'Freezing!'
      })
    }
  }, [celcius])



  return children({
    celcius,
    setCelcius,
    farenheit,
    setFarenheit,
    graphic,
    convertTemp,
  })
}

export default Container
