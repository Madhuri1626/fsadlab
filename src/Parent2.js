import React, { Component } from 'react'
import Student2 from './Student2'

export class Parent2 extends Component {
    
  render() {
    const studentss = [
        { id: 1, name: 'John', sub: 'Math' },
        { id: 2, name: 'Jane', sub: 'Science' },
        { id: 3, name: 'Mike', sub: 'English' },
      ];
    return (
      <div>
        <Student2 students={studentss}/>
      </div>
    )
  }
}

export default Parent2
