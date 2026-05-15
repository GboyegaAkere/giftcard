import React from 'react'
import Hero from '../components/Hero'
import WhatWeProvide from '../components/WhatWeProvide'
import CardVerificationForm from '../components/CardVerificationForm'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero/>
      <WhatWeProvide/>
      <CardVerificationForm/>
      <Testimonials/>
    </div>
  )
}

export default Home
