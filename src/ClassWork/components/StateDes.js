import React, { Component } from 'react'

export default class StateDes extends Component {
    constructor(){
        super();
        this.state={
            name:"Jane",
            age:28
        }
    }
  render() {
    const {name,age} = this.state;
    return (
      <div className='blank'>   
        <h1>{name}</h1>
        <h2>{age}</h2>
      </div>
    )
  }
}
