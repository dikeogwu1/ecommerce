import React from 'react'
import Category from '../Component/PopullarCategory/Category'
// import carousel
import Carousel from '../Component/Carousel/Carousel'
// import Footer
import Footer from '../Component/Footer/Footer'
// import from global store
import { useGlobalContext } from '../Component/GlobalStore/Context'

const PopullarCategory = () => {
  const { setIsSubmenuOpen } = useGlobalContext()

  return (
    <div onMouseOver={() => setIsSubmenuOpen(false)}>
      <Carousel />
      <Category />
      <Footer />
    </div>
  )
}

export default PopullarCategory
