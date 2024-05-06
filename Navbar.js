import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

function Navbar() {
  const auth = useAuth()
  return (
    <nav className='nav'>
      <div>
        <img  src='https://png.pngtree.com/png-vector/20230207/ourmid/pngtree-kid-care-logo-for-child-kindergarten-preschool-vector-image-png-image_6590817.png' alt='Logo' height='100px' width='100px'/>
      </div>
      <NavLink id='home-link' className="nav-title" to='/'>Home</NavLink>
      <NavLink className="nav-title" to='/about'>About</NavLink>
      {auth.user && <NavLink className="nav-title" to='/admin'>Admin</NavLink>}
      {/* <NavLink className="nav-title" to='/admin'>Admin</NavLink> */}
      {/* <NavLink className="nav-title" to='/course'>Courses</NavLink> */}
      {auth.user?(<NavLink className='nav-title' to='/course1'>Courses</NavLink>):(<NavLink className="nav-title" to='/course'>Courses</NavLink>)}
      <NavLink className="nav-title" to='/contact'>Contact</NavLink>
      <NavLink className="nav-title" to='/register '>Register</NavLink>
      {/* <NavLink className="nav-title" to='/login'>Login</NavLink> */}
      {auth.user?(<NavLink className="nav-title" to='/logout'>Logout</NavLink>):(<NavLink className="nav-title" to='/login'>Login</NavLink>)}
      {!auth.user &&<NavLink className="nav-title" to='/signup'>Sign up</NavLink>
}
     {/* <NavLink className="nav-title" to='/signup'>Sign up</NavL  ink> */}

    </nav>
  )
}

export default Navbar