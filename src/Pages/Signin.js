import React from 'react'
import Footer from '../Component/Footer/Footer'
import SigninItem from '../Component/SignIn/SigninItem'
// import from global store
import { useGlobalContext } from '../Component/GlobalStore/Context'

const Signin = () => {
  const { setIsSubmenuOpen } = useGlobalContext()

  return (
    <main onMouseOver={() => setIsSubmenuOpen(false)}>
      <SigninItem />
      <Footer />
    </main>
  )
}

export default Signin
