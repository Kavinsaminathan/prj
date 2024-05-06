import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Service() {
  const[study,setStudy]=useState('')
  const[age,setAge]=useState('')
  const[languages,setLanguages]=useState('') 
  const[fees,setFees]=useState('')
  const[edumod,setEdumod]=useState('')
  const[duration,setDuration]=useState('')
  // const[count,setCount]=useState('')
  const changeLanguage=(e)=>{setLanguages(e.target.value)}
  const changeEducation=(e)=>{setEdumod(e.target.value)}
  const changeStudy=(e)=>{setStudy(e.target.value)}
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    axios.post('http://localhost:3002/admin',{study,age,languages,fees,edumod,duration})
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    navigate('/course1')
  }
  return (
    
      <div>
     
        <form onSubmit={handleSubmit}>
          <fieldset>
          <label>STUDY :</label>
          <select onChange={changeStudy}>
            <option>KG</option>
            <option value='PRE-KG'>PRE-KG</option>
            <option value='LKG'>LKG</option>
            <option valur='ukg'>UKG</option>
        </select><br/><br/>
        <label>AGE:</label>
        <input type='text' value={age} onChange={(e)=>{setAge(e.target.value)}} /><br/><br/>
        <label>Language :</label>
          <select onChange={changeLanguage}>
          <option>select</option>
            <option value='english'>English</option>
            <option value='hindi'>Hindi</option>
            <option value='malayalam'>Malayalam</option> 
            <option value='Tamil'>Tamil</option>
           </select><br/><br/>

           <label>CourseFees :</label>
           <input type='text' value={fees} onChange={(e)=>{setFees(e.target.value)}}/><br/><br/>

           <label>Education Mode :</label>
           <select onChange={changeEducation}>
           <option>Select</option>
            <option value='Matric'>Matric</option>
            <option value='CBSC'>CBSE</option>
            <option value='ICSE'>ICSE</option>
           </select><br/><br/>

          <label>Course Duration :</label>
          <input type='text' value={duration} onChange={(e)=>{setDuration(e.target.value)}}/><br/><br/>
          <button type='submit'>submit</button>
          </fieldset>
        </form>
      </div>
    
  )
}