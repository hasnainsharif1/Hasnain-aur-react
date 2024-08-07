import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  const addNumber = () => {
    if(counter <20 && counter >=0) {
      counter ++;
      setCounter(counter);
    }else {
      alert('Number is exceed from its limits.')
      }
    }
  
  const removeNumber = () => {
    if(counter <= 20 && counter > 0) {
      counter --;
    setCounter(counter);
    }else {
      alert('Number is exceed from its limits.')
    }
    
  }
  return (
    <>
      <h1>Hasnain Aur React</h1>
      <h4>Number: {counter}</h4>
      <button onClick={addNumber}>Add Value: {counter}</button>
      <br /> <br />
      <button onClick={removeNumber}>remove Value: {counter}</button>
      <p>Remaning Value: {counter}</p>
    </>
  )
}

export default App
