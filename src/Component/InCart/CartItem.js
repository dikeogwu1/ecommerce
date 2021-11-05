import React from 'react'
import { BsCart2 } from 'react-icons/all'
import './navItem.css'
// import global store
import { useGlobalContext } from '../GlobalStore/Context'

const CartItem = () => {
  const { cart } = useGlobalContext()
  return (
    <>
      <aside className='wrapper'>
        <button className='cart-btn'>
          <BsCart2 className='cart-icon' />
        </button>
        <div className='items-in-cart'>
          <div className='amout-in-cart'>{cart.length}</div>
        </div>
      </aside>
    </>
  )
}

export default CartItem
