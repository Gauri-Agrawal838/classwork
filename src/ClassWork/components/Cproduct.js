import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function Cproduct() {
  return (
    <>
      <div>
      <h1>Welcome to Product Page</h1>
    </div>
    <nav>
      <NavLink to = 'shirt'>Shirts</NavLink>
      <NavLink to = 'jeans'>Jeans</NavLink>
    </nav>
    <Outlet/>
    </>
  )
}

export default Cproduct
