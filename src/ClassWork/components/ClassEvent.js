import React, { Component } from 'react'

//Event-handling with class component

export default class ClassEvent extends Component {
    HelloData(){
        alert("I've been clicked in ClassEvent File")
    }
  render() {
    return (
      <div className='App'>
        <input type="button" value="Click Here" onClick={this.HelloData}/>
      </div>
    )
  }
}
