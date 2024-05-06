import React from 'react'
import { useAuth } from './Auth';
import { useParams } from 'react-router-dom';

function Home() {
  const Auth = useAuth()
  const params=useParams()
  console.log({Auth})

  return (
    <div className="App">
      <div className="wrapper">
        <div className="Container">
          <div className="header">
            <h1>The Future Kids</h1>
            <p>Play and Learn</p>
          
            {Auth.user && <h3 style={{fontSize:'60px',color:'red'}}>Welcome {Auth.user}</h3>}
            <button type="button">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home