import React, { Component } from 'react'

export class Student2 extends Component {
  render() {
    const {students}=this.props;
    return (
      <div>
        {students.map(student=>(
            <ul>
                <li>{student.id}</li>
                <li>{student.name}</li>
                <li>{student.sub}</li>
            </ul>
        ))}
      </div>
    )
  }
}

export default Student2
