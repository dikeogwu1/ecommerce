import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Ecommerce store
import { ecommerce } from '../Lib/ecommerceData'

const RegullarProduct = () => {
  const [regullarItem, setRegullarItem] = useState([])

  useEffect(() => {
    const single = ecommerce.filter((item) => {
      return item.regullar === true
    })
    setRegullarItem(single)
  }, [])

  return (
    <div className='popular-container'>
      <h3 className='sec-tittle'>regullar products</h3>
      <section className='popular-cate-wrapper'>
        {regullarItem.map((data, index) => {
          const { variant, img, id } = data
          const page = variant.trim()
          return (
            <Link key={index} className='popular' to={`singleItem/${id}`}>
              <div className='popular-img-box'>
                <img src={img} alt={variant} className='popular-img' />
              </div>
              <h4>{variant}</h4>
            </Link>
          )
        })}
      </section>
    </div>
  )
}

export default RegullarProduct
