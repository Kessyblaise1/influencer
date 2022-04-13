import './GuestScreen.css'
import { Link } from 'react-router-dom'
import React from 'react'

// Components
import Logocomponent from '../components/LogoComponent'

const GuestScreen = () => {
  return (
    <div className='guestscreen screen'>
      <Logocomponent />

      <p className='prompt'>Select your role</p>

      <div className='role_container'>
        <Link to={'/login'} className='role'>
          <figure>
            <img src={'./images/brandImage.png'} alt={'brand'} className='role_image' />
          </figure>
          <p className='role_text'>Brand</p>
        </Link>

        <Link to={'/login'} className='role'>
          <figure>
            <img src={'./images/influencer.png'} alt={'brand'} className='role_image' />
          </figure>
          <p className='role_text'>Influencer</p>
        </Link>
      </div>
    </div>
  )
}

export default GuestScreen
