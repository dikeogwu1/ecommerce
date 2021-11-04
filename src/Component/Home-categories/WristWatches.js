import React, { useState, UseEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { ecommerce } from '../Lib/ecommerceData'

const WristWatches = () => {
  const [watches, setWatches] = useState([])

  useState(() => {
    const single = ecommerce.filter((item) => {
      return item.category === 'latest'
    })
    setWatches(single)
  }, [])
  return (
    <div>
      <section className='wrist-watch-news'>
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
      </section>
      <section className='wrist-watches-container'>
        <div className='wrist-w-tittle'>
          <h3>wristwatches</h3>
          <p>Recommended for you</p>
        </div>
        <div className='wrist-watches-wrapper'>
          {watches.map((watch) => {
            const { type, id, price, offer, img } = watch
            return (
              <article key={id} className='most-review'>
                <div className='most-review-img wrist-w-img-box'>
                  <img src={img} alt={type} className='most-img' />
                  <div className='m-r-price-wrapper'>
                    <span>${price}</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default WristWatches
