import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
// import ecommerce store
import { ecommerce } from '../Lib/ecommerceData'
// import global store
import { useGlobalContext } from '../GlobalStore/Context'

const Items = ({ product }) => {
  const { id, offer, price, name, variant, brand, img } = product
  const [inCart, setInCart] = useState(false)
  const { setCart, cart } = useGlobalContext()
  const removeContainer = useRef(null)
  const addContainer = useRef(null)

  useEffect(() => {
    cart.map((item) => {
      if (item.id === id) {
        setInCart(true)
      }
      return item
    })
  }, [cart, id])

  useEffect(() => {
    if (inCart) {
      addContainer.current.classList.add('hide-add-cart')
      removeContainer.current.classList.add('show-remove-crat')
    } else {
      addContainer.current.classList.remove('hide-add-cart')
      removeContainer.current.classList.remove('show-remove-crat')
    }
  }, [inCart])

  // add item to cart function
  const addToCart = (e) => {
    setInCart(true)
    const itemId = parseInt(e.currentTarget.dataset.id)
    const items = ecommerce.find((item) => item.id === itemId)
    setCart([...cart, items])
  }

  // remove item from cart function
  const removeFromCart = (e) => {
    const fillId = parseInt(e.currentTarget.dataset.id)
    setInCart(false)
    if (cart.length > 0) {
      const single = cart.filter((item) => item.id !== fillId)
      setCart(single)
    }
  }
  return (
    <div>
      <Link to={`singleItem/${id}`}>
        <div className='feature-img-box'>
          <img src={img} alt={variant} />
        </div>
        <hr className='hr' />
        <div className='featured-text'>
          <h4>{name}</h4>
          <div className='featured-price'>
            <del>{offer ? `$${price}` : null}</del>
            <span> {offer ? `$${offer}` : `$${price}`}</span>
          </div>
          <u>{offer ? 'special offer' : ''}</u>
          <p>{brand}</p>
          <div className='featured-footer'>
            <span>Buy it now</span>
          </div>
        </div>
      </Link>
      <div className='featured-btn'>
        <button
          className='add-cart'
          onClick={addToCart}
          ref={addContainer}
          data-id={id}
        >
          <FaCartPlus /> <span>Add</span>
        </button>
        <button
          className='remove-cart'
          onClick={removeFromCart}
          data-id={id}
          ref={removeContainer}
        >
          <FaCartPlus /> <span>Remove</span>
        </button>
      </div>
    </div>
  )
}

export default Items
