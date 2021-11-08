import React from 'react'
import DiscoutItems from '../Component/Discount/DiscoutItems'
import Footer from '../Component/Footer/Footer'
// import from global store
import { useGlobalContext } from '../Component/GlobalStore/Context'

const Discount = () => {
  const { setIsSubmenuOpen } = useGlobalContext()

  return (
    <div onMouseOver={() => setIsSubmenuOpen(false)}>
      <DiscoutItems />
      <Footer />
    </div>
  )
}

export default Discount
