import React from 'react'
import CartItems from '../Component/CartItems/CartItems'
import Footer from '../Component/Footer/Footer'
// import from global store
import { useGlobalContext } from '../Component/GlobalStore/Context'

const Cart = () => {
  const { setIsSubmenuOpen } = useGlobalContext()

  return (
    <div onMouseOver={() => setIsSubmenuOpen(false)}>
      <CartItems />
      <Footer />
    </div>
  )
}

export default Cart
