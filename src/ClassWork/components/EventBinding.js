import React, { Component } from 'react'

export class EventBinding extends Component {
    constructor(){
        super()
        // this.HandleEvent = this.HandleEvent.bind(this) //binding event inside the constructor method
        this.state = {
            val : 1,
            name : 'Learning React State'
        }
    }
    HandleEvent(){
        console.log("hello",this)
        this.setState({
          val : this.state.val+1,
          name : "Hello, Learn React with me"
        })
    }
  render() {
    return (
      <div>
      <h1>{this.state.name}</h1>
      <h2>{this.state.val}</h2>
        {/* <input type="button" value="click here" onClick={()=>{this.HandleEvent()} } /> */}
        <input type="button" value="Click here" onClick={this.HandleEvent.bind(this)}/> 
        {/* binding event inside the render method */}
      </div>
    )
  }
}

export default EventBinding

// Difference b/w binding event inside the constructor method vs render method vs using arrow function
// Default way to use is to bind the event method inside the constructor because it works slow inside the render method in comparison to class method
