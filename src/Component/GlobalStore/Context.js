import React, { useState, useContext, useEffect } from 'react'

export const globalStore = React.createContext()

const Context = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showCategories, setShowCategories] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  return (
    <globalStore.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        isSubmenuOpen,
        setIsSubmenuOpen,
        showCategories,
        setShowCategories,
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
