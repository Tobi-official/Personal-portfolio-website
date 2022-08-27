import React from 'react'
import './portfolio.css'
import data from './data'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio--container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
          <article className='portfolio--item' key={id}>
              <div className='portfolio--item-image'>
                <img src={image} alt=""/>
              </div>
              <h3>{title}</h3>
              <div className='portfolio--item-cta'>
                <a href={github} className='btn' target="_blank" >Github</a>
                <a href={demo}className='btn btn-primary' target="_blank" >Live Demo</a>
              </div> 
          </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio