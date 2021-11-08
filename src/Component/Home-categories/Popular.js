import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ecommerce } from '../Lib/ecommerceData'

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    const single = ecommerce.filter((item) => {
      return item.popular === true
    })
    setPopular(single)
  }, [])

  return (
    <div className='popular-container'>
      <h3 className='sec-tittle'>explore popular categories</h3>
      <section className='popular-cate-wrapper'>
        {popular.map((data, index) => {
          const { variant, img } = data
          const page = variant.trim()
          return (
            <Link key={index} className='popular' to={`popullar/${page}`}>
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

export default Popular
