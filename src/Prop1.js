import React from 'react'
import Student from './Student'
function Prop1() {
    const data=[
        {id:1, name:"mad", sub:"mat"},
        {id:2, name:"md", sub:"ma"},{id:1, name:"ma", sub:"m"}
    ]
  return (
    <div>

<Student students={data}/>

    </div>
  )
}

export default Prop1
