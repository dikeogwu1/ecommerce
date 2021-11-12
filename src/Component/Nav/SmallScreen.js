import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaUser } from 'react-icons/all'
import { Link } from 'react-router-dom'
// imported the component holding the amount of items in cart
import CartItem from '../InCart/CartItem'
// import links data
import sublinks from './navData'
// import from global store
import { useGlobalContext } from '../GlobalStore/Context'

const SmallScreen = () => {
  const [navItem, setNavItem] = useState(null)
  const [modalMover, setModalMover] = useState({})
  const [singleItem, setSingleItem] = useState([
    { page: '', text: '', links: [{ label: '', icon: null }] },
  ])
  const subContainer = useRef(null)
  const {
    isSubmenuOpen,
    person,
    setIsSubmenuOpen,
    setIsModalOpen,
    registration,
    setRegistration
  } = useGlobalContext()

  // function to run when over on nav links
  const checkProduct = (e) => {
    const products = e.target.textContent
    let client = e.target.getBoundingClientRect()
    let clientHeight = client.bottom - 3
    let clientCenter = (client.left + client.right) / 2
    const items = sublinks.find((sub) => {
      return sub.page === products
    })
    const { page } = items
    setNavItem(page)
    setModalMover({ clientHeight, clientCenter })
    setIsSubmenuOpen(true)
  }

  useEffect(() => {
    const fixSubmenu = subContainer.current
    fixSubmenu.style.top = `${modalMover.clientHeight}px`
    fixSubmenu.style.left = `${modalMover.clientCenter}px`
    if (navItem) {
      const category = sublinks.find((subs) => {
        return subs.page === navItem
      })
      setSingleItem([category])
    }
  }, [navItem, modalMover.clientCenter, modalMover.clientHeight])

  useEffect(()=>{
if (person) {
  setRegistration(true)
}
  },[])

  // showing and removing submenu based on conditions
  const removeSubmenu = (e) => {
    const theTarget = e.target
    if (!theTarget.classList.contains('product')) {
      setIsSubmenuOpen(false)
    } else {
      setIsSubmenuOpen(true)
    }
  }

  return (
    <>
      <nav className='nav-container' onMouseOver={removeSubmenu}>
        {/* nav header */}

        <Link to='/'>
          <h2 className='logo'>
            <span className='f'>f</span>
            <span className='a'>a</span>
            <span className='b'>b</span>
          </h2>
        </Link>

        <ul className='nav-links'>
          {/* link to home page */}
          <li>
            <Link to='/' className='home-link'>
              Home
            </Link>
          </li>

          <div className='product-wrapper'>
            {/*  Daily deals page */}
            <li onMouseOver={checkProduct} className='product'>
              Daily deals
            </li>

            {/* features page */}
            <li onMouseOver={checkProduct} className='product'>
              Features
            </li>

            {/* help and contact in page */}
            <li onMouseOver={checkProduct} className='product'>
              Help & contact
            </li>
          </div>
          {/* link to sign in page */}
          <li>
            {!registration ? (
              <Link to='/signin' className='signin-link'>
                Register
              </Link>
            ) : (
              <h4 className='user'>
                <FaUser /> <span>{person}</span>
              </h4>
            )}
          </li>
        </ul>
        {/* showing the amount of item in cart */}
        <div className='nav-icon'>
          <Link to='/cart'>
            <CartItem />
          </Link>
          <button className='bars-btn' onClick={() => setIsModalOpen(true)}>
            <FaBars className='bars-icon' />
          </button>
        </div>
      </nav>
      <section
        className={
          isSubmenuOpen ? 'b-submenu-wrapper show-submenu' : 'b-submenu-wrapper'
        }
        ref={subContainer}
      >
        <section>
          {singleItem.map((single, index) => {
            const { page, text, links } = single
            return (
              <div key={index}>
                <h4 className='inner-head'>{page}</h4>
                <p>{text}</p>
                <div className='sub-inner'>
                  {links.map((inner, index) => {
                    const { label, icon, url } = inner
                    return (
                      <Link key={index} to={url} className='modal-links'>
                        <div className='sub-icon'>{icon}</div>
                        <h5 className='sub-label'>{label}</h5>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </section>
      </section>
    </>
  )
}

export default SmallScreen
