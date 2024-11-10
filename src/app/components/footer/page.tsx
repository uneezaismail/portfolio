import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
        <div className='footer'>
        <FaGithub/><FaLinkedin/><FaFacebook/>
        </div>
            <hr />
            <div className='footer-copy'>
            <h3>Made with 🤍 By Uneeza</h3>
            </div>
    </footer>
  )
}

export default Footer