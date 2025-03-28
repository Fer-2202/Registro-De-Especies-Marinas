import React from 'react'
import PaginaHome from '../Components/PaginaHome.jsx'
import Nav from '../Components/Nav.jsx'
import Video from '../Components/Video.jsx'
import Footer from '../Components/Footer.jsx'

function Home() {
  return (
    <div>
        <Nav/>
        <Video/>
        <PaginaHome />
        <Footer/>

    </div>
  )
}

export default Home