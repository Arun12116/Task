import React from 'react'
import { Link } from 'react-router-dom'



import "./Nav.css"
const Nav = () => {
  return (
    <>
  <div className="Navbar">

<ul className='list'>
<div className='logo'>Logo</div>
<Link  className='li' to={"/"}>Table</Link>

    <Link  className='li' to={"/Form"}>Form</Link>
</ul>
</div>

    
    
    </>
  )
}

export default Nav