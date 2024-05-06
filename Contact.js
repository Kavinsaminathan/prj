import React from 'react'

function Contact() {
  return (
    <div>
      <div className='contact_info'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1 d-flex'>
              {/* phn */}
              <div className='contact_info_items d-flex justify-content-start align-items-center'>
                <img src='' alt='phobe png' />
                <div className='contact_info_content'>
                  <div className='contect_info_title'>
                    Phone
                  </div>
                  <div>
                    +91 9876 543 210
                  </div>
                </div>
              </div>
              {/* Email */}
              <div className='contact_info_items d-flex justify-content-start align-items-center'>
                <img src='' alt='phobe png' />
                <div className='contact_info_content'>
                  <div className='contect_info_title'>
                    Email
                  </div>
                  <div>
                     KidSchool@Gmail.com
                  </div>
                </div>
              </div>
              {/* phn */}
              <div className='contact_info_items d-flex justify-content-start align-items-center'>
                <img src='' alt='phobe png' />
                <div className='contact_info_content'>
                  <div className='contect_info_title'>
                    Address
                  </div>
                  <div>
                    Coimbatore,TN,India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Contact form */}
    <div className='contact_form'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <div  className='contact_form_container py-5'>
              <div className='contact_form_title'>
                Go in Touch
                <form className='contact_form'>
                  <div className='contact_form_name d-flex justify-content-between align-items-between p-2'>
                    <input type='text' id='contact_form_name' className='contact_form_name input_field' placeholder='Your Name' required='true'/>
                    <input type='email' id='contact_form_email' className='contact_form_email input_field' placeholder='Your Email' required='true'/>
                    <input type='number' id='contact_form_number' className='contact_form_number input_field' placeholder='Your Phone Number' required='true'/>
                  </div>
                  <div className='contact_form_text mt-4'>
                    <textarea className='text_field contact_form_message' id='' placeholder='Message ' cols='100' rows='10'></textarea>
                  </div>
                  <div className='contact_form_button'>
                    <button type='submit' className='button contact_submit_button'>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact