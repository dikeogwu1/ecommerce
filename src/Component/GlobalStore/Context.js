import React, { useState, useContext, useEffect, useReducer } from 'react'
// imoprt ecommerce store
import { ecommerce } from '../Lib/ecommerceData'
export const globalStore = React.createContext()

const getLocalStorage = () => {
  let cart = localStorage.getItem('list')
  if (cart) {
    return (cart = JSON.parse(localStorage.getItem('list')))
  } else {
    return []
  }
}

const Context = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showCategories, setShowCategories] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [cart, setCart] = useState(getLocalStorage())
  const [input, setInput] = useState('')
  const [submit, setSubmit] = useState(false)
  const [items, setItems] = useState([])
  const [isRegistered, setIsRegistered] = useState(false)
  const [registration, setRegistration] = useState(false)

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(cart))
    const cate = new Set(ecommerce.map((item) => item.variant))
    setItems([...cate])
  }, [cart])

  return (
    <globalStore.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        isSubmenuOpen,
        setIsSubmenuOpen,
        showCategories,
        setShowCategories,
        cart,
        setCart,
        input,
        setInput,
        submit,
        setSubmit,
        items,
        isRegistered,
        setIsRegistered,
        registration,
        setRegistration,
      }}
    >
      {children}
    </globalStore.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(globalStore)
}

export default Context
