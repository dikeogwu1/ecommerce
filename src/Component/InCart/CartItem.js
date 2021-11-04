import React from 'react'
import { BsCart2 } from 'react-icons/all'
import './navItem.css'

const CartItem = () => {
  return (
    <>
      <aside className='wrapper'>
        <button className='cart-btn'>
          <BsCart2 className='cart-icon' />
        </button>
        <div className='items-in-cart'>
          <div className='amout-in-cart'>0</div>
        </div>
      </aside>
    </>
  )
}

export default CartItem
