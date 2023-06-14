import Userinput from "./Userinput";
import './App.css';
import Useroutput from "./Useroutput";
import { useState } from "react";



function App () {
const [username, setUsername]= useState ('kolawole')
function changeName (e) {
  setUsername(e.target.value)
}

  return(
    <div className="App">
      <Userinput change={changeName}/>
      <Useroutput name= "kolawole" address= "iju ishaga lagos"/> 
      <Useroutput name= {username} address= 'ikeja lagos'/>
    </div>
  )
}
export default App