import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import ecommerce store
import { ecommerce } from '../Lib/ecommerceData'

const MostReview = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const single = ecommerce.filter((item) => {
      return item.review === true
    })
    setReviews(single)
  }, [])

  return (
    <>
      <div className='top-image'></div>
      <div className='most-review-container'>
        <h3 className='sec-tittle'>mostly reviewed products</h3>
        <section className='most-review-wrapper'>
          {reviews.map((review) => {
            const { type, id, price, offer, img } = review
            return (
              <Link key={id} className='most-review' to={`singleItem/${id}`}>
                <div className='most-review-img'>
                  <img src={img} alt={type} className='most-img' />
                  <h4>{type}</h4>
                  <div className='m-r-price-wrapper'>
                    <del>{offer ? `$${price}` : null}</del>
                    <span>{!offer ? `$${price}` : `$${offer}`}</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </section>
      </div>
    </>
  )
}

export default MostReview
