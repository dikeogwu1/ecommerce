import React, { useState, useEffect } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/all'
// import Global store
import { useGlobalContext } from '../GlobalStore/Context'
import { ecommerce } from '../Lib/ecommerceData'

const SubCart = ({ single, value, setValue }) => {
  const { img, id, variant, name, price, amount } = single
  const shorter = name.substring(0, 30)
  const { cart, setCart } = useGlobalContext()
  const [calc, setCalc] = useState(1)

  useEffect(() => {
    const total = cart
      .map((single) => {
        return single.price
      })
      .reduce((arr, curr) => {
        return arr + curr
      }, 0)

    setValue(total)
  }, [])

  // console.log(amount)
  const deleteItem = (e) => {
    const itemId = parseInt(e.currentTarget.dataset.id)
    const fill = cart.filter((item) => item.id !== itemId)
    setCart(fill)
  }

  // decrease quantity
  const decrease = (e) => {
    setCalc(calc - 1)
    const decreaseId = parseInt(e.currentTarget.dataset.id)
    const check = ecommerce
      .filter((item) => {
        return item.id === decreaseId
      })
      .reduce((arr, curr) => {
        return arr + price
      }, 0)
    setValue(value - check)
    if (calc < 2) {
      const rem = cart.filter((one) => one.id !== decreaseId)
      setCart(rem)
    }
  }

  // increase quantity

  const increase = (e) => {
    setCalc(calc + 1)
    const increaseId = parseInt(e.currentTarget.dataset.id)
    const lookin = ecommerce
      .filter((item) => {
        return item.id === increaseId
      })
      .reduce((arr, curr) => {
        return arr + price
      }, 0)
    setValue(value + lookin)
    console.log(lookin)
  }

  return (
    <div className='parent'>
      <div className='cart-items-img-wrapper'>
        <img src={img} alt={variant} />
      </div>
      <div className='cart-items-desc'>
        <h4>{shorter}...</h4>
        <h4>${price}</h4>
        <button onClick={deleteItem} data-id={id}>
          delete
        </button>
      </div>

      <div className='cart-item-btn-wrapper'>
        <button onClick={increase} data-id={id}>
          <FaChevronUp />
        </button>
        <div>{calc}</div>
        <button onClick={decrease} data-id={id}>
          <FaChevronDown />
        </button>
      </div>
    </div>
  )
}

export default SubCart
