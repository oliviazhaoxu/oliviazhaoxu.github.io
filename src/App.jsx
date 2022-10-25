import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Audio from './components/audio/Audio'
import Photo from './components/photo/Photo'
// import Coding from './components/coding/Coding'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Audio />
      <Photo />
      <Contact />
      <Footer />
    </>
  )
}

export default App