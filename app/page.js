import React from 'react'
import Hero from '@/Components/Hero'
import Grid from '@/Components/Grid'
import People from '@/Components/People'
import Testimonials from '@/Components/Testimonials'
import Pack from '@/Components/Pack'
import Slider from '@/Components/Slider'

const page = () => {
  return (    
    <div>
      <Hero />
      <Slider />
      <Grid />
      <People />
      <Testimonials />
      <Pack />
    </div>
  )
}

export default page