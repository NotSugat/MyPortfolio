import React from 'react'
import { BsInstagram, BsGithub, BsFacebook } from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href='https://www.instagram.com/sugat_sujakhu/' target='_blank'>
        <BsInstagram />
      </a>

      <a href='https://github.com/NotSugat' target='_blank'>
        <BsGithub />
      </a>
      <a href='https://www.facebook.com/sujalsujakhu/' target='_blank'>
        <BsFacebook />
      </a>
    </div>
  )
}

export default HeaderSocials
