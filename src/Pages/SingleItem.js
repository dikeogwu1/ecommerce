import React from 'react'
import Each from '../Component/Single/Each'
// import from global store
import { useGlobalContext } from '../Component/GlobalStore/Context'

const SingleItem = () => {
  const { setIsSubmenuOpen } = useGlobalContext()

  return (
    <div onMouseOver={() => setIsSubmenuOpen(false)}>
      <Each />
    </div>
  )
}

export default SingleItem
