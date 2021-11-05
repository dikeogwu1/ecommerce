import React, { useState, useContext, useEffect } from 'react'

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
  // const [store, set] = useState()

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(cart))
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
