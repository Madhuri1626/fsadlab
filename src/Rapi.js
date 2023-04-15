import React,{useState, useEffect} from 'react'

function Rapi() {

    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(jsonData => setData(jsonData))
        .catch(error =>console.log(error));
    })
  return (
    <div>
      {data.map(item => (
        <ul key={item.id}>
            <li>{item.title}</li>
            <li>{item.body}</li>
        </ul>
      ))}
    </div>
  )
}

export default Rapi
