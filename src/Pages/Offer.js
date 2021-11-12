import React from 'react'
import Footer from '../Component/Footer/Footer'
import SpecialOffer from '../Component/Offer/SpecialOffer'
// import from global store
import { useGlobalContext } from '../Component/GlobalStore/Context'

const Offer = () => {
  const { setIsSubmenuOpen } = useGlobalContext()

  return (
    <main onMouseOver={() => setIsSubmenuOpen(false)}>
      <SpecialOffer />
      <Footer />
    </main>
  )
}

export default Offer
