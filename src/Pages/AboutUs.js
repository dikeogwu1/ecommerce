import React from 'react'
import About from '../Component/About/About'
import Footer from '../Component/Footer/Footer'
// import from global store
import { useGlobalContext } from '../Component/GlobalStore/Context'

const AboutUs = () => {
  const { setIsSubmenuOpen } = useGlobalContext()

  return (
    <main onMouseOver={() => setIsSubmenuOpen(false)}>
      <About />
      <Footer />
    </main>
  )
}

export default AboutUs
