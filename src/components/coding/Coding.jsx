import React from 'react'
import Screenshot1 from '../../assets/gens_playlist.png'
import Screenshot2 from '../../assets/react_portfolio.png'
import Screenshot3 from '../../assets/task_manager.png'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Coding = () => {
  const projects = [
    {
      id: 1,
      title: "Gen's Playlist",
      text: 'Gen used to work as a professional music journalist, and I have subscribed to her weekly music newsletter since day one. Her recommendations greatly shaped my taste in music, and I want to share it with more people. So, after obtaining her permission, I created this website for her, and for everyone who craves the company of music.',
      screenshot: Screenshot1
    },

    {
      id: 2,
      title: "My React Portfolio Website",
      text: 'A portfolio website to showcase my journalist work, including audio, photo, and coding projects. Created by React.',
      screenshot: Screenshot2
    },

    {
      id: 3,
      title: "In Progress: Task Manager",
      text: 'I am building an interactive task manager for my front-end web architecture class this semester. We will be using HTML/CSS/JavaScript/React.',
      screenshot: Screenshot3
    },

    {
      id:4,
      title: "In Progress: Deep Dive Rotten Tomato",
      text: "I am learning to clean and analysis data using Python in Jupyter Notebook. For the final project, I'm interested in deep diving into Rotten Tomato's database."
    }
  ]
  return (
    <section id='coding'>
      <h1>Coding Projects</h1>

      <Swiper className='container coding__container'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {
          projects.map(({id, title, text, screenshot})=> {
            return (
              <SwiperSlide key={id} className="coding__project">
                <div className='screenshot'>
                  <img src={screenshot} />
                </div>
                <h2>{title}</h2>
                <p>{text}</p>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Coding