import React, { useState, useEffect } from 'react'
import { ecommerce } from '../Lib/ecommerceData'

const Popular = () => {
  const [popular, setPopular] = useState([])

  useState(() => {
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
          return (
            <article key={index} className='popular'>
              <div className='popular-img-box'>
                <img src={img} alt={variant} className='popular-img' />
              </div>
              <h4>{variant}</h4>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default Popular
