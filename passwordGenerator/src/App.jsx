import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength]= useState(8)
  const [numbersAllowed,setNumbersAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password,setPassword]=useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let pass = ""
    if(numbersAllowed) str+="0123456789"
    if(charactersAllowed) str+="!~@#$%^&*(){}[]:;',.></?`"

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length +1)
      pass+=str.charAt(char)  
    }
    setPassword(pass)
  },[length,numbersAllowed,charactersAllowed,setPassword])

  const copyToClipboard = useCallback(()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numbersAllowed,charactersAllowed,passwordGenerator])
  return (
    <>
    <h1 className='text-4xl text-center p-7 '>Password Generator</h1>
    <div className="w-full max-w-md shadow-md mx-auto rounded-lg px-4 my-8 " style={{backgroundColor:"#c3bef7"}}>
      <div className="flex overflow-hidden mt-10 rounded-lg shadow-none py-3">
        <input
        type="text"
        value={password}
        className='w-full outline-none py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button
        className='outline-none px-3 py-0.5 shrink-0 bg-fuchsia-600 hover:bg-fuchsia-300'
        // style={{backgroundColor:"#ffb2e6"}}
        onClick={copyToClipboard}
        >copy</button>
      </div>
      <div className="flex text-md gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={7}
          max={120}
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
          className='cursor-pointer'/>
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked={numbersAllowed}
          id='number'
          onChange={()=>
          {setNumbersAllowed((prev)=>!prev)}
          } 
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked={charactersAllowed}
          id='character'
          onChange={()=>
          {setCharactersAllowed((prev)=>!prev)}
          } 
          />
          <label htmlFor="character">Characters</label>
        </div>
      </div>
   
    </div>
    </>

    
  )
}

export default App