import React from 'react'

function Useroutput(props) {
  return (
    <div>
        <p> {props.name} </p>
  
        <p>{props.address}</p>
      
    </div>
  )
}

export default Useroutput