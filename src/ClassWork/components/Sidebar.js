import React, {Component} from 'react'
import PropType from 'prop-types';
export default class Sidebar extends Component{
  constructor(){
    super();
    console.log("This is my constructor");
  }
  render(){
    return (
      <>
        <div className="blank">This is my sidebar1</div>
        <h5>My college name is : {this.props.name}</h5>
      </>
    )
  }
  
}
// Sidebar.propTypes={
//   name: PropType?.string,
// }
// export default Sidebar;
