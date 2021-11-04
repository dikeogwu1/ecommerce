import React, { useState, useEffect } from 'react'
// import ecommerce store
import { ecommerce } from '../Lib/ecommerceData'

const MostReview = () => {
  const [reviews, setReviews] = useState([])

  useState(() => {
    const single = ecommerce.filter((item) => {
      return item.review === true
    })
    setReviews(single)
  }, [])

  return (
    <div className='most-review-container'>
      <h3 className='sec-tittle'>mostly reviewed products</h3>
      <section className='most-review-wrapper'>
        {reviews.map((review) => {
          const { type, id, price, offer, img } = review
          return (
            <article key={id} className='most-review'>
              <div className='most-review-img'>
                <img src={img} alt={type} className='most-img' />
                <h4>{type}</h4>
                <div className='m-r-price-wrapper'>
                  <del>{offer ? `$${price}` : null}</del>
                  <span>{!offer ? `$${price}` : `$${offer}`}</span>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default MostReview
