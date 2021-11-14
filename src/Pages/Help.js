import React from 'react'
import Footer from '../Component/Footer/Footer'
import NeedHelp from '../Component/Help/NeedHelp'
// import from global store
import { useGlobalContext } from '../Component/GlobalStore/Context'

const Help = () => {
  const { setIsSubmenuOpen } = useGlobalContext()

  return (
    <main onMouseOver={() => setIsSubmenuOpen(false)}>
      <NeedHelp />
      <Footer />
    </main>
  )
}

export default Help
