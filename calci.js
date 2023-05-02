/* eslint-disable no-eval */
import React,{useState} from 'react'

export default function Calci() {
const [result,setResult]=useState("");

    const input=(e)=>{
        setResult(result.concat(e.target.name))
    }

    const clr=()=>{
        setResult('')
    }

    const del=()=>{
        setResult(result.slice(0,-1))
    }

    const Calculate=()=>{
        setResult(eval(result))
    }

  return (
    <>
        <h1>Calculator by React</h1>
        <div className='container'>
          <div className='worksystem'>
            <p>{result}</p>
            <div>
              <button className='AC' onClick={clr}>AC</button>
              <button className='DE' onClick={del}>DE</button>
              <button name="/" onClick={input}>/</button>
            </div>
            <div>
              <button name="7" onClick={input}>7</button>
              <button name="8" onClick={input}>8</button>
              <button name="9" onClick={input}>9</button>
              <button name="*" onClick={input}>*</button>
            </div>
            <div>
              <button name="4" onClick={input}>4</button>
              <button name="5" onClick={input}>5</button>
              <button name="6" onClick={input}>6</button>
              <button name="-" onClick={input}>-</button>
            </div>
            <div>
              <button name="1" onClick={input}>1</button>
              <button name="2" onClick={input}>2</button>
              <button name="3" onClick={input}>3</button>
              <button name="+" onClick={input}>+</button>
            </div>
            <div>
              <button name="00" onClick={input}>00</button>
              <button name="0" onClick={input}>0</button>
              <button className='equal' onClick={Calculate}>=</button>
            </div>
          </div>
        </div> 
    </>
  )
}
