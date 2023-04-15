import React, { useState } from 'react'

function Cc() {
    const [count,setCount] = useState(0);
    const increment = (op) =>{
        if(op === '+'){
            setCount(count+1)
        }
        else{
            setCount(count-1)
        }
    }
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>(increment("+"))}>+</button>
      <button onClick={() =>(increment("-"))}>-</button>
    </div>
  )
}

export default Cc
