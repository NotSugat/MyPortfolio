import React from 'react'
import './footer.css'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        SUGAT
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com/sujalsujakhu/'>
          <FaFacebookF />
        </a>
        <a href='https://www.instagram.com/sugat_sujakhu/'>
          <FaInstagram />
        </a>
        <a href='https://github.com/NotSugat'>
          <BsGithub />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Sugat Sujakhu. All rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
