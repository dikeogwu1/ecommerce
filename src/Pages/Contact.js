import React from 'react'
import ContactUs from '../Component/Contact/ContactUs'
import Footer from '../Component/Footer/Footer'
// import from global store
import { useGlobalContext } from '../Component/GlobalStore/Context'

const Contact = () => {
  const { setIsSubmenuOpen } = useGlobalContext()

  return (
    <main onMouseOver={() => setIsSubmenuOpen(false)}>
      <ContactUs />
      <Footer />
    </main>
  )
}

export default Contact
