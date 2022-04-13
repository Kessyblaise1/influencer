import React from 'react'
import { Link } from 'react-router-dom'
import './LogoComponent.css'

const Logocomponent = () => {
  return (
    <div className='logo_container'>
      <Link to={'/'}>influencer</Link>
    </div>
  )
}

export default Logocomponent
