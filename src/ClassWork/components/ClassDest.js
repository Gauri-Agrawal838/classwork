import React, { Component } from 'react'

export default class ClassDest extends Component {
  render() {
    const a = this.props.name;
    const b = this.props.age;
    return (
      <div>
        <h1>{a}</h1>
        <h2>{b}</h2>
      </div>
    )
  }
}
