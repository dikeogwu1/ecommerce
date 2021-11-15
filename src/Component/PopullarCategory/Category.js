import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import './category.css'
// import Ecommerce store
import { ecommerce } from '../Lib/ecommerceData'

const Category = () => {
  const { id } = useParams()
  const [single, setSingle] = useState([
    { id: '', img: '', name: '', brand: '', price: '', offer: '' },
  ])

  useEffect(() => {
    const check = ecommerce.filter((item) => item.variant === id)
    setSingle(check)
    window.scrollTo({ top: 0 })
  }, [id])

  return (
    <main className='pop-category-container'>
      <h1>{id}</h1>
      <div className='pop-category-wrapper'>
        {single.map((product) => {
          const { id, name, price, offer, brand, img } = product
          return (
            <Link key={id} to={`../singleItem/${id}`} className='pop-items'>
              <div className='pop-category-ing-wrapper'>
                <img src={img} alt={brand} />
              </div>
              <h4>{name}</h4>
              <div className='m-r-price-wrapper'>
                <del>{offer ? `$${price}` : null}</del>
                <span>{!offer ? `$${price}` : `$${offer}`}</span>
              </div>
              <p>{brand}</p>
            </Link>
          )
        })}
      </div>
    </main>
  )
}

export default Category
