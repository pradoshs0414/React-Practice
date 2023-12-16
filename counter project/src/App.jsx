import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const increaseValue = ()=>{
    setCount(++count)
  }
  const decreaseValue = ()=>{
    if(count>0){
    setCount(--count)
    }
    else{
      alert("Value cannot be less than zero!")
    }
  }
  return (
    <>
      <h1 className='headingOne'>Counter App</h1>
      <h2>Count is: {count}</h2>
      <button onClick={increaseValue}>Count ++</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Count --</button>
    </>
  )
}

export default App
