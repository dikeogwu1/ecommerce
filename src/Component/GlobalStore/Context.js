import React, { useState, useContext, useEffect } from 'react'
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

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(cart))
  }, [cart])

  const getSingle = ecommerce.map((single) => {
    return single.variant
  })
  const check = new Set(getSingle)
  const items = [...check]

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
