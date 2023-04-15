import React from 'react'


function Dashboard() {
  return (
    <div>
        <center>
            <h1>Profile page </h1>
            <h1>Hello {localStorage.getItem('Name')}</h1>
            </center>
    </div>
  )
}

export default Dashboard
