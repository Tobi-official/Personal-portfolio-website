import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className='container about--container'>
        <div className='about--me'>
          <img src={ME} alt="About Image" />
        </div>
        <div className='about--content'>
          <p>
              I’m a web developer. I spend almost my whole day, practically every day, experimenting
            with HTML, CSS, and JavaScript; dabbling with React and PHP; and inhaling a wide variety
            of potentially useful information. <br></br>
            I can be relied upon in this field and with my experiences, I believe not even the sky is my
            limit.
          </p>
          
          <div className='about--cards'>

            <article className='about--card'>
              <FaAward className='about--icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about--card'>
              <FiUsers className='about--icon'/>
              <h5>Clients</h5>
              <small>***</small>
            </article>

            <article className='about--card'>
              <VscFolderLibrary className='about--icon'/>
              <h5>Projects</h5>
              <small>15+ completed projects</small>
            </article>
          </div>

          <a href='#contact' className='btn btn-primary'>Hire Me</a>
        </div>
      </div>
    </section>
  )
}

export default About