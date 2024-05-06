import React from 'react'

function Footer() {
  return (
    <div>
        <footer>
            <div className='container-fluid' id='footer-box'>
              <div className='row'>
                <div className='col-lg-4' id='footer-1'>
                    <h2 style={{paddingTop: '20px'}}>Kids primary Institute</h2>
                    <p style={{paddingTop: '50px'}}>135, Continental Building,B wing, <br/>Worli, Mumbai,<br/>Maharashtra 400 018.</p>
                </div>
                <div className='col-lg-4'>
                   <ol style={{listStyleType: "none",paddingTop:'60px'}}>
                    <li>Play Group</li>
                    <li>Nursery</li>
                    <li>Kindergarten</li>
                    <li>Teacher Training Programme</li>
                    <li>Privacy Policy</li>
                   </ol>
                </div>
                <div className='col-lg-4'>
                   <ol style={{listStyleType: "none",paddingTop:'20px'}}>
                    <li><h1>Contact Us</h1></li>
                    <li>PH:    +91 9999 888 9999</li>
                    <li>EMAIL: kids@gmail.com</li>
                    <li>TIME: 10:00 a.m. to 06:00 p.m.,<br/>Mon-Fri</li>
                   </ol>
                </div>
              </div>
              <p>Copyright © Kids Learn Ltd. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer