import React , {useState}from 'react'
import App from './my-fruit-app/src/App'
const Fruit = () => {

  const [foods,setfood]=useState(["Apple","Orange","Graphs"])

  function foodhadleer(){
    const newfood=document.getElementById("foodindex").value;
    document.getElementById("foodindex").value =" ";

    setfood(f =>[...f ,newfood]);

  }
  return (
    <div>
      <h2>Email</h2>
      <ul>
        {foods.map((foods,index) => <li key={index}>{foods} </li>)}
      </ul>
      <input id="foodindex" type='text' placeholder='Enter Your fav fruit'/>
      <button onClick={foodhadleer}>Add Food</button>
    </div>

  )
}

export default Fruit