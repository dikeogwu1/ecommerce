import React, { useEffect, useState } from 'react'
// import Global store
import { useGlobalContext } from '../GlobalStore/Context'
import './cartItems.css'
import SubCart from './SubCart'

const CartItems = () => {
  const { cart, setCart, isRegistered, setIsRegistered, registration } =
    useGlobalContext()
  const [value, setValue] = useState(0.1)

  // handle order placing
  const handleOrder = () => {
    setIsRegistered(true)
  }

  // clear cart function
  const handleClearCart = () => {
    setCart([])
  }

  // conditional rendering
  if (cart.length < 1) {
    return <h3 className='empty-cart'>your cart is currently empty</h3>
  }

  return (
    <section>
      <div className='cart-items-wrapper'>
        {cart.map((single, index) => {
          if (single.offer) {
            single.price = single.offer
          }
          return (
            <article key={index} className='cart-items-box'>
              <SubCart single={single} value={value} setValue={setValue} />
            </article>
          )
        })}
        <div className='underline'></div>
        <div className='calculate'>
          <div className='total-wrapper'>
            <h3 className='total-text'>total</h3>
            <h4 className='total'>{parseFloat(value.toFixed(2))}</h4>
          </div>
          <div className='calc-btn-wrapper'>
            <button className='clear-cart' onClick={handleClearCart}>
              clear cart
            </button>
            <button className='place-order' onClick={handleOrder}>
              Place order
            </button>
          </div>
          <div>{`${isRegistered ? 'Please register to place order' : ''}`}</div>
        </div>
      </div>
    </section>
  )
}

export default CartItems
