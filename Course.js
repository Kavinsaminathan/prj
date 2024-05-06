import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Course() {
    const [list,setList]=useState([])
    const [name,setName]=useState('')
    const [age,setAge]=useState()
    const [duration,setDuration]=useState('')
    const [mode,setMode]=useState('')
    const [fees,setSyllabus]=useState()
    const [languages,setLanguage]=useState('')
    const navigate=useNavigate()
    // update

    const [isPopup,setIsPopUp]=useState(false)
    const [name1,setName1]=useState('')
    const [age1,setAge1]=useState()
    const [duration1,setDuration1]=useState('')
    const [mode1,setMode1]=useState('')
    const [fees1,setSyllabus1]=useState()
    const [languages1,setLanguage1]=useState('')

    const handleClk=()=>{
        navigate('/register')
    }

    useEffect(()=>{
        axios.get('http://localhost:3002/admin')
        .then(res=>{setList(res.data)})
        .catch(err=>{console.log(err)})
    },[])
    const handleDelete=(id1)=>{
      axios.delete('http://localhost:3002/admin/${id1}')
      .then(res=>{console.log(res)
        alert('Delete successfully')})
        .catch(err=>{console.log(err)})
    }
    const openPopup=(data)=>{
        setIsPopUp(true)
        setName1(data.name)
        setAge1(data.age)
        setDuration1(data.duration)
        setMode1(data.mode)
        setSyllabus1(data.fees)
        setLanguage1(data.languages)
    }
    const handleUpdate=()=>{
        axios.put('http://localhost:3002/admin/${id1}',{name:name1,age:age1,duration:duration1,mode:mode1,fees:fees1,languages:languages1})
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
    }  

  return (
    <div>
        <table className='Adm-table'>
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Age Limit</th>
                    <th>Course Duration</th>
                    <th>Mode</th>
                    <th>Fees</th>
                    <th>Extra Language</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list.map(x=>
                    <tr>
                        <td>{x.study}</td>
                        <td>{x.age}</td>
                        <td>{x.duration}</td>
                        <td>{x.edumod}</td>
                        <td>{x.fees}</td>
                        <td>{x.languages}</td>
                        <td>{<button className='reg-btn' onClick={handleUpdate}>update</button>}{<button className='reg-btn' onClick={handleDelete}>Delete</button>}</td>
                    </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Course