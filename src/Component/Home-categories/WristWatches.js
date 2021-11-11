import React, { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import ecommerce store
import { ecommerce } from '../Lib/ecommerceData'

const WristWatches = () => {
  const [watches, setWatches] = useState([])

  useEffect(() => {
    const single = ecommerce.filter((item) => {
      return item.category === 'latest'
    })
    setWatches(single)
  }, [])

  return (
    <div>
      <Link className='wrist-watch-news' to={`popullar/Wrist watch`}>
        <div>
          <h3>Looking for Wristwatches?</h3>
          <p>Check new items now! Great offers and limited deals</p>
        </div>
        <div>
          <button className='wrist-news-btn'>
            Check Out{' '}
            <span>
              <FaArrowRight className='wrist-news-icon' />
            </span>
          </button>
        </div>
      </Link>
      <section className='wrist-watches-container'>
        <div className='wrist-w-tittle'>
          <h3>wristwatches</h3>
          <p>Recommended for you</p>
        </div>
        <div className='wrist-watches-wrapper'>
          {watches.map((watch) => {
            const { type, id, price, img } = watch
            return (
              <Link key={id} className='most-review' to={`singleItem/${id}`}>
                <div className='most-review-img wrist-w-img-box'>
                  <img src={img} alt={type} className='most-img' />
                  <div className='m-r-price-wrapper'>
                    <span>${price}</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default WristWatches
