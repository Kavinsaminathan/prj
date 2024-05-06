import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [fname,setFname]=useState('')
  const [lname,setLname]=useState('')
  const [dob,setDob]=useState('')
  const [fatherName,setFatherName]=useState('')
  const [motherName,setMotherName]=useState('')
  const [email,setEmail]=useState('')
  const [number,setNumber]=useState('')
  const [gender,setGenter]=useState('')
  const [address,setAddress]=useState('')
  const [course,setCourse]=useState('')
  const [activity,setActivity]=useState('')
  const [language,setLanguage]=useState('')
  const navigate = useNavigate()
  const handleSubmit=(e)=>{
    axios.post('http://localhost:3002/user',{fname,lname,dob,fatherName,motherName,email,number,gender,address,course,activity,language})
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    navigate('/Products')
  }

  return (
   <div>
    <fieldset style={{width: '100%'}}>
     <form style={{width: '100%'}} onSubmit={handleSubmit}>
        <table className='Adm-table'>
            <tr>
                <td>FIRST NAME</td>
                <td><input maxlength="10" value={fname} type="text" onChange={(e)=>setFname(e.target.value)}/>(Max 30 charactera a-z and A-Z)</td>
            </tr>
            <tr>
                <td>LAST NAME</td>
                <td><input type="text" value={lname} onChange={(e)=>setLname(e.target.value)}/>(Max 30 charactera a-z and A-Z)</td>
            </tr>
            <tr>
                <td>DATE OF BIRTH</td>
                <td><input type="date" value={dob} onChange={(e)=>setDob(e.target.value)}/></td>
            </tr>
            <tr>
                <td>FATHER NAME</td>
                <td><input type="text" value={fatherName} onChange={(e)=>setFatherName(e.target.value)}/>(Max 30 charactera a-z and A-Z)</td>
            </tr>
            <tr>
                <td>MOTHER NAME</td>
                <td><input type="text" value={motherName} onChange={(e)=>setMotherName(e.target.value)}/>(Max 30 charactera a-z and A-Z)</td>
            </tr>
            <tr>
                <td>EMAIL ID</td>
                <td><input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/></td>
            </tr>
            <tr>
                <td>MOBILE NUMBER</td>
                <td><input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>(10 digit number)</td>
            </tr>
            <tr>
                <td>GENTER</td>
                <td><input type="radio" name="genter" value={gender} onChange={(e)=>setGenter(e.target.value)}/>male
                    <input type="radio" name="genter" value={gender} onChange={(e)=>setGenter(e.target.value)}/>female
                </td>
            </tr>
            <tr>
                <td>ADDRESS</td>
                <td><textarea name="" id="" cols="30" rows="3" value={address} onChange={(e)=>setAddress(e.target.value)}></textarea></td>
            </tr>
            <tr>
                <td>COURSE FOR</td>
                <td><input type="checkbox" name="hobbies" value={course} onChange={(e)=>setCourse(e.target.value)}/>PRE-KG
                    <input type="checkbox" name="hobbies" value={course} onChange={(e)=>setCourse(e.target.value)}/> LKG
                    <input type="checkbox" name="hobbies" value={course} onChange={(e)=>setCourse(e.target.value)}/>UKG
                </td>
            </tr>
            <tr>
                <td>EXTRA ACTIVITIS</td>
                <td><input type="checkbox" name="hobbies" value={activity} onChange={(e)=>setActivity(e.target.value)}/>Drawing
                    <input type="checkbox" name="hobbies" value={activity} onChange={(e)=>setActivity(e.target.value)}/> Singing
                    <input type="checkbox" name="hobbies" value={activity} onChange={(e)=>setActivity(e.target.value)}/>Dancing
                    <input type="checkbox" name="hobbies" value={activity} onChange={(e)=>setActivity(e.target.value)}/> Sketching
                    <input type="checkbox" name="hobbies" value={activity} onChange={(e)=>setActivity(e.target.value)}/>Others
                </td>
            </tr>
            <tr>
                <td>LANGUAGE</td>
                <td style={{padding: '20px'}}><input type="radio" value={fname}/>Tamil
                    <input type="radio" name="course" value={fname} onChange={(e)=>setLanguage(e.target.value)}/>English
                    <input type="radio" name="course" value={fname} onChange={(e)=>setLanguage(e.target.value)}/>Hindi
                    <input type="radio" name="course" value={fname} onChange={(e)=>setLanguage(e.target.value)}/>Malayalam
                </td>
            </tr>
            <tr>
                {/* <td></td> */}
                <td colSpan="2">
                    <center><input type="submit" style={{marginLeft:'40px'}}/><input type="reset" style={{marginLeft:'40px'}}/></center>
                </td>
            </tr>
        </table>
    </form>

    </fieldset>
   </div>
  )
}

export default Signup