import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h2>Services</h2>

      <div className='container services--container'>
        <article className='service'>
          <div className='service--head'>
            <h3>Web Design</h3>
          </div>
          <ul className='service--list'>
            <li>
              <BiCheck className='service--list-icon' />
              <p>Design Responsive landing pages on websites with advance frontend languages.</p>
            </li>
            <li>
              <BiCheck className='service--list-icon' />
              <p>Create website layout with HTML and CSS.</p>
            </li>
            <li>
              <BiCheck className='service--list-icon' />
              <p>Integrate datas from backend server and database.</p>
            </li>
            <li>
              <BiCheck className='service--list-icon' />
              <p>Write and Edit content on Web pages.</p>
            </li>
            <li>
              <BiCheck className='service--list-icon' />
              <p>Add new features and functionalities on applications.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service--head'>
            <h3>Web Development (Back-end)</h3>
          </div>
          <ul className='service--list'>
            <li>
              <BiCheck className='service--list-icon' />
              <p>Troubleshoot and debug applications.</p>
            </li>
            <li>
              <BiCheck className='service--list-icon' />
              <p>Develop dynamic and functional web application.</p>
            </li>
            <li>
              <BiCheck className='service--list-icon' />
              <p>Database management (strictly PHP-mySql).</p>
            </li>
            <li>
              <BiCheck className='service--list-icon' />
              <p>Build reuseable codes.</p>
            </li>
            <li>
              <BiCheck className='service--list-icon' />
              <p>Add functionalities to user-interface and gather datas from users.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service--head'>
            <h3>Mobile Apps (React-native)</h3>
          </div>
          <ul className='service--list'>
            <li>
              <BiCheck className='service--list-icon' />
              <p>Develop cross-platform mobile applications with react-native.</p>
            </li>
            <li>
              <BiCheck className='service--list-icon' />
              <p>Create a fully functional mobile applications.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services