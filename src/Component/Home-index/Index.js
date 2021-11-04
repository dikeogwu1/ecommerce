import React from 'react'
// import all component to meet in index.js
import Search from '../Search/Search'
import Carousel from '../Carousel/Carousel'
import Product from '../Home-product/Product'

const Index = () => {
  return (
    <div>
      <Search />
      <Carousel />
      <Product />
    </div>
  )
}

export default Index
