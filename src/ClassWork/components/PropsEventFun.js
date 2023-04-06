import React from 'react'

//Event-handling with arguments with the help of props through function
function PropsEventFun(props) {
    const HelloData = (name)=> //binding event handler
    alert("Hello "+name);
  return (
    <div className='App'>
      <input type="button" value="Click Me" onClick={()=>HelloData(props.name)} />
    </div>
  )
}

export default PropsEventFun;
