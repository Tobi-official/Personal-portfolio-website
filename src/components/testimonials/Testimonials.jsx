import React from 'react'
import './testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import data from './data'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Reviews & Certifications</h2>

      <div className='container testimonials--container'>
      <Swiper 
         // install Swiper modules
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         className='testimonials--wrapper'
        >
          {
            data.map(({id, name, image, review}) => {
             return ( 
             <SwiperSlide modules={Pagination} className='testimonial' key={id}>
                <div className='client--image'>
                  <img src={image} alt='image'/>
                </div>
                <h5 className='client--name'>{name}</h5>
                  <small className='client--review'>{review}</small>
              </SwiperSlide>
             )
            })
          }
        </Swiper>
        <div className='testimonials--certification'>
          <article className='certification'>
              <h3>Heroic Online Universal Int'l</h3>
            <div className='certification--details'>
              <p>
                This is to Certify that Onigbanjo Abdul Basit, whose portfolio is on view is a certified 
                web designer & developer from Heroic Online Universal Int'l.
              </p>
              <h3>REFERENCE </h3>
              <p className='mobile'>Mr Uche Joe, CEO Heroic Online Universal Int'l.</p>
              <p className='mobile'>Mobile: +234 803 774 7461</p>
            </div>
          </article>
        </div> 
      </div>
  
    </section>
  )
}

export default Testimonials