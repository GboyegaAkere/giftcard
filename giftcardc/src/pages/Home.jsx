import React from 'react'
import Hero from '../components/Hero'
import WhatWeProvide from '../components/WhatWeProvide'
import CardVerificationForm from '../components/CardVerificationForm'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQItem'
import AboutUs from '../components/AboutUs'

const Home = () => {
  return (
    <div>
      <Hero/>
      <WhatWeProvide/>
      <CardVerificationForm/>
      <Testimonials/>
      <FAQ/>
      <AboutUs/>
    </div>
  )
}

export default Home
