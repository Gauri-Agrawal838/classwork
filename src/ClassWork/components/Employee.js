import React, { Component } from 'react'

export class Employee extends Component {
    constructor(){
        super();
        this.state = {
            val : 1,
            name : 'Learning React State'
        }
    }
    changeData(){
        this.setState({
          val : this.state.val+1,
          name : "Hello, Learn React with me"
        })
    }
  render() {
    return (
      <div>
        <h3>{this.state.val}</h3>
        <h1>{this.state.name}</h1>
        <input type="button" value="click here" onClick={()=>{this.changeData()} } />
      </div>
    )
  }
}

export default Employee
