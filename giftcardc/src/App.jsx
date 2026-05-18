import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import AnnouncementBar from './components/Announcementbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <AnnouncementBar />
        <Header />
      </div>
      <div style={{ paddingTop: '100px' }}>
        <Home />
      </div>
      <Footer/>
    </div>
  )
}

export default App