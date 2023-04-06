import React from 'react'

//Event-handling with functional component

function Events() {
    function HandleData(){
        alert("I've been clicked")
    }
  return (
    <div>
      <input type="button" value="Click Here" onClick={HandleData}/>
    </div>
  )
}

export default Events
