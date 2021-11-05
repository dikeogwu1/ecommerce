import React from 'react'
import Featured from '../Component/Features/Featured'
import Footer from '../Component/Footer/Footer'
// import search bar
import Search from '../Component/Search/Search'
// import from global store
import { useGlobalContext } from '../Component/GlobalStore/Context'

const Features = () => {
  const { setIsSubmenuOpen } = useGlobalContext()

  return (
    // showing and removing submenu based on conditions
    <div onMouseOver={() => setIsSubmenuOpen(false)}>
      <Search />
      <Featured />
      <Footer />
    </div>
  )
}

export default Features
