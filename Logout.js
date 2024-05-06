import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const auth=useAuth()
  const navigate=useNavigate()
  const handleClick=()=>{
    auth.logout()
    navigate('/')
    
  }
  return (
    <button onClick={handleClick}>Log Out</button>


  )
}

export default Logout