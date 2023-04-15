import React from 'react'

function Student(props) {
    const {students} = props;
  return (
    <div>
       
      {students.map(item => (
         <ul>
        <li>{item.id}</li>
        <li>{item.name}</li>
        </ul>
      ))}
      
    </div>
  )
}

export default Student
