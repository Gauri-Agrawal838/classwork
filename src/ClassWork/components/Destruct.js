import React, {Component} from 'react';
import PropType from 'prop-types';

function Destruct({name,age}) {
    // const {name,age} = props;
  return (
    <div className='blank'>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  )
}

export default Destruct
