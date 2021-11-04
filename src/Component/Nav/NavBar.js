import React from 'react'
import './navbar.css'
import SmallScreen from './SmallScreen'
import NavModal from './NavModal'

const NavBar = () => {
  return (
    <>
      <nav className='nav'>
        <SmallScreen />
        <NavModal />
      </nav>
    </>
  )
}

export default NavBar
