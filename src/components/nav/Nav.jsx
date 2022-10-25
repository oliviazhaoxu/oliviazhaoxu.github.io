import React from 'react'
import './nav.css'
import {FaHome, FaUserGraduate, FaSoundcloud, FaPhotoVideo, FaPhoneAlt} from 'react-icons/fa'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
        <a href="#header" onClick={()=> setActiveNav("#header")} className={activeNav === "#header" ? 'active' : ""}><FaHome /></a>
        <a href="#about" onClick={()=> setActiveNav("about")} className={activeNav === "about" ? 'active' : ""}><FaUserGraduate /></a>
        <a href="#audio" onClick={()=> setActiveNav("audio")} className={activeNav === "audio" ? 'active' : ""}><FaSoundcloud /></a>
        <a href="#photo" onClick={()=> setActiveNav("photo")} className={activeNav === "photo" ? 'active' : ""}><FaPhotoVideo /></a>
        {/* <a href="#coding" onClick={()=> setActiveNav("coding")} className={activeNav === "coding" ? 'active' : ""}><FaCode /></a> */}
        <a href="#contact" onClick={()=> setActiveNav("contact")} className={activeNav === "contact" ? 'active' : ""}><FaPhoneAlt /></a>
    </nav>
  )
}

export default Nav