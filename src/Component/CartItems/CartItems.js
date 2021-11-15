import React, { useState } from 'react'
import { FaCheckCircle, FaUser, FaTimes } from 'react-icons/all'
// import Global store
import { useGlobalContext } from '../GlobalStore/Context'
import './cartItems.css'
import SubCart from './SubCart'

const CartItems = () => {
  const {
    cart,
    setCart,
    isRegistered,
    setIsRegistered,
    registration,
    orderModal,
    setOrderModal,
    person,
  } = useGlobalContext()
  const [value, setValue] = useState(0.1)

  // handle order placing
  const handleOrder = () => {
    if (registration) {
      setOrderModal(true)
    } else {
      setIsRegistered(true)
    }
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
      <div
        className={`${
          orderModal
            ? 'order-modal-container show-order-modal'
            : 'order-modal-container'
        }`}
      >
        <div className='order-modal'>
          <button
            className='order-modal-btn'
            onClick={() => setOrderModal(false)}
          >
            <FaTimes />
          </button>
          <div>
            <FaCheckCircle className='order-successfull' />
          </div>
          <h4>your order has been placed !</h4>
          <h3 className='order-modal-total'>
            total purchase: <span>{`$${parseFloat(value.toFixed(2))}`}</span>
          </h3>
          <div>
            <FaUser /> <span className='user-name'>{person}</span>
          </div>
          <p>thanks for petronage</p>
        </div>
      </div>
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
          <div className='please-reg'>{`${
            isRegistered ? 'Please register to place order' : ''
          }`}</div>
        </div>
      </div>
    </section>
  )
}

export default CartItems
