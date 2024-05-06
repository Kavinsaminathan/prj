import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom' 
import { useAuth } from './Auth'
import axios from 'axios'

function Login() {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userList, setUserList] = useState([])
  const [errmsg, setErrMsg] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:3001/user')
      .then(res =>setUserList(res.data))
  }, [])
  const handleLogin = (e) => {
    e.preventDefault()
    const user = userList.find(x => x.email === email)
    if (user) {
      if (user.password === password) {
        auth.login(user.name)
        navigate('/')
      }
      else {
        setErrMsg('Incorrect Password')
      }
    }
    else {
      setErrMsg('User Not Found')
    }

  }

  return (
    <div style={{ backgroundColor: 'blue', height: '500px' }}>
      <section className='sign-in' >
        <div className='container mt-5'>

          <div class="card">
            <span><h2 className='form-title'>Login</h2>
              <form className='register-form' id='register-form' onSubmit={handleLogin}>
                <div className='login-inp1'>
                  <label>EMAIL:</label><br />
                  <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <br />
                <div className='login-inp2'>
                  <label>PASSWORD:</label><br />
                  <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <br />
                <button className='beautiful-button' type='submit'>Login</button>
              </form></span>
           
          </div>
          {errmsg}
        </div>
        
      </section>
      
    </div>
  )
}

export default Login


// import React, { useEffect, useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useAuth } from './Auth';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [userList, setUserList] = useState([]);
//   const [errMsg, setErrMsg] = useState('');
//   const Auth = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://localhost:3001/user')
//       .then(res => setUserList(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Check if userList is empty or null
//     if (!userList || userList.length === 0) {
//       setErrMsg('No users available');
//       return;
//     }

//     const user = userList.find(x => x.email === email);
//     if (user) {
//       if (user.password === password) {
//         Auth.login(user.name);
//         navigate('/');
//       } else {
//         setErrMsg('Incorrect Password');
//       }
//     } else {
//       setErrMsg('User Not Found');
//     }
//   };

//   return (
//     <div style={{ backgroundColor: 'blue', height: '500px' }}>
//       <section className='sign-in'>
//         <div className='container mt-5'>
//           <div className="card">
//             <h2 className='form-title'>Login</h2>
//             <form className='register-form' id='register-form' onSubmit={handleLogin}>
//               <div className='login-inp1'>
//                 <label>EMAIL:</label><br />
//                 <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
//               </div>
//               <br />
//               <div className='login-inp2'>
//                 <label>PASSWORD:</label><br />
//                 <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
//               </div>
//               <br />
//               <button className='beautiful-button' type='submit'>Login</button>
//             </form>
//             {errMsg && <p>{errMsg}</p>}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Login;
