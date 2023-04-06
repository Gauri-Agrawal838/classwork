import React from 'react'
import { useNavigate } from 'react-router-dom'
function Cabout() {
  const navigate = useNavigate();     //hooks

  const navigateback = (url) => {     //user defined function
    navigate(url)
  }

  return (
    <div>
      <h1>Welcome to About Page</h1>
      <button onClick={() => navigateback(-1)}>Go Back one page</button>
      <button onClick={() => navigateback(-2)}>Go Back two page</button>
    </div>
  )
}

export default Cabout
