import React from 'react'
import './contact.css'
import {FaLinkedin, FaGithub, FaTwitter, FaSoundcloud} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact">
      <h1>Yell at me or something</h1>

      <div className='container contact__container'>
        <div className='socials'>
          <a href="https://www.linkedin.com/in/olivia-zhao-69331512a/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/OZhaoxu" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://github.com/oliviazhaoxu" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://soundcloud.com/zhao-xu-233382804" target="_blank" rel="noreferrer"><FaSoundcloud /></a>
        </div>

        <form action=''>
          <h2>Contact Form</h2>
          <input type='text' name='name' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your email address' required />
          <textarea name='message' rows='7' placeholder='Type your message' required />
          <button type='submit' className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact