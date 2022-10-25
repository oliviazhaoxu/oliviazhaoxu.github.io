import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import CV from '../../assets/Olivia_Zhao_Resume.pdf' 

const About = () => {
  return (
    <section id="about">
      <h1>Get To Know Me</h1>
      <div className="container about__container">
        <div className='about__me'>
          <div className='about__image'>
            <img src={ME} alt='a color portrait of Olivia Zhao' />
            </div>
        </div>

        <div className='about__content'>
          <p>Born and raised in Sichuan, China, I was the only child of two factory workers. Neither of my parents went to university, but they raised me on a varied diet of feminist books and punk music, mainly by free-range parenting. I became a liberal and adventurous person, and found my true calling in journalism.</p>
          <p>As a young kid I was drawn to crime fictions and detective stories. Filled with a burning desire to just <i>know</i>, I followed Agatha Christie and Arthur Conan Doyle as they unraveled one mystery after another with their words. Later I discovered podcasts, and immediately fell under the spell of true crime and long-form investigation.</p>
          <p>Currently, I'm pursuing a Master's degree at the Graduate School of Journalism, UC Berkeley.</p>
          <a href="https://richmondconfidential.org/author/xzhao/" className='btn'>Published in Print</a>
          <a href={CV} download className='btn'>Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default About