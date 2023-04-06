import React, {Component} from 'react'

//Event-handling with arguments with the help of props through Component
class PropsEventComp extends Component{
    render(){
        const HelloData = (name)=> {//binding event handler
        alert("Hello "+name);
    }
    //without using this
  return (
    <div className='App'>
      <input type="button" value="Click Me" onClick={()=>HelloData(this.props.name)} />
    </div>
  )}
}

export default PropsEventComp;
