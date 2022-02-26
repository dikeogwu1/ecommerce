import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './discountItems.css'
// import ecommerce store
import { ecommerce } from '../Lib/ecommerceData'

// get all discount products
const getDiscount = ecommerce.filter((item) => {
  return item.category === 'offer'
})

const DiscoutItems = () => {
  const [discount] = useState(getDiscount)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main className='discount-container'>
      <h3>
        special discount center,<span className='f'>f</span>
        <span className='a'>a</span>
        <span className='b'>b</span> market promo
      </h3>

      <div className='discount-wrapper'>
        {discount.map((product, index) => {
          const { id, name, variant, price, offer, img } = product
          let position = 'normal'
          if (index === 2) {
            position = 'big'
          }
          if (index === 7) {
            position = 'big'
          }
          if (index === 12) {
            position = 'big'
          }
          return (
            <Link
              key={id}
              className={`discount-items ${position}`}
              to={`singleItem/${id}`}
            >
              <div className='discount-img-wrapper'>
                <img src={img} alt={variant} className='discount-img' />
              </div>
              <h4>{name}</h4>
              <p>{variant}</p>
              <h4>
                formal price: <del>${price}</del>
              </h4>
              <h4>
                Now: <span>${offer}</span>
              </h4>
            </Link>
          )
        })}
      </div>
    </main>
  )
}

export default DiscoutItems
