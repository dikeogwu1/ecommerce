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
const getName = () => {
  let person = localStorage.getItem('personName')
  if (person) {
    return (person = JSON.parse(localStorage.getItem('personName')))
  } else {
    return ''
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
  const [orderModal, setOrderModal] = useState(false)
  const [person, setPerson] = useState(getName())

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(cart))
    localStorage.setItem('personName', JSON.stringify(person))
    const cate = new Set(ecommerce.map((item) => item.variant))
    setItems([...cate])
  }, [cart, person])

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
        orderModal,
        setOrderModal,
        person,
        setPerson,
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
