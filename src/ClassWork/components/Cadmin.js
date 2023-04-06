import React from 'react'
import { NavLink } from 'react-router-dom'
function Cadmin() {
  return (
    <div>
      <h1 className='text-3xl'><NavLink to='/user/admin'>Admin Page</NavLink></h1>
    </div>
  )
}

export default Cadmin
