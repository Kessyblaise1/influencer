import React from 'react'
import './InfoForm.css'
import Logocomponent from '../components/LogoComponent'

const Infoform = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='info_form screen'>
      <Logocomponent />

      <p className='prompt'>Complete the form to continue</p>

      <form onSubmit={handleSubmit}>
        <div className='form_group'>
          <div className='inline_group'>
            <label htmlFor='firstName'>First Name:</label>
            <input type='text' name='name' id='firstName' placeholder='Your First Name' />
          </div>
          <div className='inline_group'>
            <label htmlFor='lastName'>Last Name:</label>
            <input type='text' name='name' id='lastName' placeholder='Your Last Name' />
          </div>
        </div>
        <div className='form_group'>
          <label htmlFor='expertise'>Expertise:</label>
          <input type='text' name='expertise' id='expertise' placeholder='Health & Fitness' />
        </div>
        <div className='form_group'>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' id='email' placeholder='Your Email' />
        </div>
        <button type='submit' className='primary_button'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Infoform
