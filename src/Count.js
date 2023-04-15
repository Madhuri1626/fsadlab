import React, { useState } from 'react'

function Count() {
    const [count, setCount ] = useState(0);
   const increment =()=>{
        setCount(count+1)
    }
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increment}>click</button>
    </div>
  )
}

export default Count
