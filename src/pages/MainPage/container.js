import { useEffect, useState } from 'react'

const Container = ({ children }) => {
  const [celcius, setCelcius] = useState(0.0)
  const [farenheit, setFarenheit] = useState(0.0)
  

 // conversion guide
 // °C to °F	Multiply by 9, then divide by 5, then add 32
 // °F to °C	Deduct 32, then multiply by 5, then divide by 9
 

  // all methods
  const onChangeHandler = (origin, value) => {
    console.log('onchange handler debug', [origin, value])
    let convertedValue = value

    // data sanitations

    // data conversion
    if (origin === 'celcius') {
      convertedValue = ((value * 9) / 5) + 32
      setFarenheit(convertedValue)
    } else if (origin === 'farenheit') {
      convertedValue = ((value - 32) * 5 )/ 9
      setCelcius(convertedValue)
    } else {
      // error boundary
    }

    // output handling - set states
    console.log(`output: converted from ${origin} with value: ${value}, converted value is: ${convertedValue}`)


  }



  // all effects
  useEffect(() => {
    console.log('page on load')
  }, [])

  useEffect(() => {
    console.log('celcius value', celcius)
    const convertedValue = ((celcius * 9) / 5) + 32

    if (convertedValue === farenheit) {
      return
    }  else {
      setFarenheit(convertedValue)
    }
  }, [celcius])

  useEffect(() => {
    console.log('celcius value', celcius)
  }, [farenheit])


  return children({
    celcius,
    setCelcius,
    farenheit,
    setFarenheit,
    onChangeHandler
  })
}

export default Container
