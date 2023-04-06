import React from 'react'
import { NavLink } from 'react-router-dom';

function Cnavbar() {
  const NavLinkCss = ({isActive}) =>{
    return{
      fontSize : isActive ? '25px' : '20px',
      fontWeight  : isActive ? 'bold' : 'normal',

    }
  }
  return (
    <nav>
      <NavLink to = '/' style={NavLinkCss}>Home </NavLink>
      <NavLink to = '/product' style={NavLinkCss}>Product </NavLink>
      <NavLink to = '/service' style={NavLinkCss}>Service </NavLink>
      <NavLink to = '/about' style={NavLinkCss}>About </NavLink>
      <NavLink to = '/contact' style={NavLinkCss}>Contact </NavLink>
    </nav>
  )
}

export default Cnavbar
