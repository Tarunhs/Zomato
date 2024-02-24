import React from 'react'
import '../App.css'
import HeroPage from './HeroPage'
import Navbar from './Navbar'
import Content from './Content'

export default function Home() {
  return (
    <div>
      <Navbar color="text-white"/>
<HeroPage />
<Content />
    </div>
  )
}
