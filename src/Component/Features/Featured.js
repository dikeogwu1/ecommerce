import React from 'react'
// import featured css
import './featured.css'
// import ecommerce store
import { ecommerce } from '../Lib/ecommerceData'
import Items from './Items'

const Featured = () => {
  return (
    <div className='featured-container'>
      <hr />
      <h3>explore all featured product</h3>
      <section className='feature-wrapper'>
        {ecommerce.map((product) => {
          const { id } = product
          return (
            <article key={id}>
              <Items product={product} />
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default Featured
