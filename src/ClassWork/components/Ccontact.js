import React from 'react'
import { useNavigate } from 'react-router-dom';
function Ccontact() {
  const navigate = useNavigate();

  // const navigatetoabout = (url) => {
  //   navigate(url)
  // }

  const navigatetoabout = () => {
    let name = 'Gauri'
    if(name == 'Gauri')
    {
      navigate('/about')
    }
    else{
      navigate('/service')
    }
  }
  return (
    <>
    <div>
      <h1>Welcome to Contact page</h1>
    </div>
    <button onClick={() =>navigatetoabout('/')}>Home</button>
    <button onClick={() =>navigatetoabout('/service')}>Service</button>
    <button onClick={() =>navigatetoabout('/about')}>About</button>
    <button onClick={navigatetoabout}>Click Here</button>
    </>
  )
}

export default Ccontact
