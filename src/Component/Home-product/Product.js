import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
// import categories css
import '../Home-categories/categories.css'
// imoprt all home product
import MostReview from '../Home-categories/MostReview'
import Popular from '../Home-categories/Popular'
import WristWatches from '../Home-categories/WristWatches'

const Product = () => {
  return (
    <div className='home-categories-wrapper'>
      <MostReview />
      <Popular />
      <WristWatches />
      <Footer />
    </div>
  )
}

export default Product
