import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup1() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate = useNavigate()
    const handleSignup=()=>{
        axios.post('http://localhost:3001/user',{name,email,password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        navigate('/login')
    }
  return (
    <div>
      
        <div class="card" id='signup-card'>
              <span><h2 className='form-title'>Signup</h2>
              <form className='register-form' id='register-form' onSubmit={handleSignup}>
                <div className='login-inp1'>
                <label>Name:</label><br/>
                <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>   
                </div>
                <br />
                <div className='login-inp2'>
                <label>Email:</label><br/>
                <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/> 
                </div>
                <br />
                <div className='login-inp3'>
                <label>Password:</label><br/>
                <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <br />
                <button className='beautiful-button' type='submit'>Sign up</button>
              </form></span>
          </div>
    </div>
  )
}
