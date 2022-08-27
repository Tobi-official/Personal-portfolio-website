import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header--socials'>
        <a href='https://www.linkedin.com/in/abdul-basit-onigbanjo-88993b22a' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/Tobi-official' target='_blank'><FaGithub /></a>
        <a href='https://www.twitter.com/Tobi_Alchemist' target='_blank'><AiFillTwitterCircle /></a>
    </div>
  )
}

export default HeaderSocials