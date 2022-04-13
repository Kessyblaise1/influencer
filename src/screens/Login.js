import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

// Components
import Logocomponent from '../components/LogoComponent'

const Login = () => {
  return (
    <div className='loginscreen screen'>
      <Logocomponent />

      <div className='login_image'>
        <figure>
          <img src={'./images/relaxing.png'} alt={'girl relaxing svg'} />
        </figure>
      </div>

      <Link to={'/influencer-info'} className='login_button'>
        <i className='bx bxl-facebook-circle'></i>
        <p>continue with Facebook</p>
      </Link>
    </div>
  )
}

export default Login
