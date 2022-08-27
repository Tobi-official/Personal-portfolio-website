import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Skills & Expertise</h2>

      <div className='container experience--container'>
        <div className='experience--frontend'>
          <h3>Frontend Development</h3>
          <div className='experience--content'>
            <article className='experience--details'>
              <BsPatchCheckFill className='experience--details-icon'/>
              <div>
                <h4>HTML</h4>
              <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experience--details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experience--details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experience--details-icon'/>
              <div>
                <h4>JQuery</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experience--details-icon'/>
              <div>
                <h4>Ajax</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experience--details-icon'/>
              <div>
                <h4>React js</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience--backend'>
        <h3>Backend & Mobile Apps</h3>
          <div className='experience--content'>
            <article className='experience--details'>
              <BsPatchCheckFill className='experience--details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experience--details-icon'/>
              <div>
                <h4>Node js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experience--details-icon'/>
              <div>
                <h4>mySql</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experience--details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience--details'>
              <BsPatchCheckFill className='experience--details-icon'/>
              <div>
                <h4>React - Native</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience