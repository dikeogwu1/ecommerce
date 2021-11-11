import React, { useEffect } from 'react'
// import index.js the entrie point
import Index from '../Component/Home-index/Index'
// import from global store
import { useGlobalContext } from '../Component/GlobalStore/Context'

const Home = () => {
  const { setIsSubmenuOpen, setInput } = useGlobalContext()

  useEffect(() => {
    setInput('')
    window.scrollTo({ top: 0 })
  }, [setInput])

  return (
    // showing and removing submenu based on conditions
    <main onMouseOver={() => setIsSubmenuOpen(false)}>
      <Index />
    </main>
  )
}

export default Home
