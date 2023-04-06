import React from 'react';
import PropType from 'prop-types';
function Header(props) {
  return (
    <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
    <h4>This is my Header1.</h4>
    <h3>Hello, {props.name}</h3>
    <br />
    {props.rollno}
    <br />
    {props.isplaced.toString()}
    <br />
    {String(props.isplaced)}
  </header>
  )
}
Header.propTypes={name : PropType?.string.isRequired}
// Header.propTypes={rollno : PropType?.toInt()}
// Header.propTypes={branch : PropType.toString()}
// Header.propTypes={isplaced : PropType.bool()}

Header.defaultProps = {name:"Ravi", rollno:1}

function Header2(props){
  return(
    <h1>This is my Header2</h1>
  )
}
// export default Header;
export {Header, Header2};

