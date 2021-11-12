import React from 'react'
import { FaTimes, FaUser } from 'react-icons/all'
import { Link } from 'react-router-dom'
// import nav links data
import sublinks from './navData'
// import from global store
import { useGlobalContext } from '../GlobalStore/Context'
const NavModal = () => {
  const { isModalOpen,person, setIsModalOpen, registration } = useGlobalContext()

  return (
    <aside className={isModalOpen ? 'nav-modal show-modal' : 'nav-modal'}>
      <div className='modal-wrapper'>
        <button className='close-modal' onClick={() => setIsModalOpen(false)}>
          <FaTimes />
        </button>
        <ul className='modal-items'>
          {/* map over modal sublinks */}
          {sublinks.map((sub, index) => {
            const { page, links } = sub
            return (
              <article key={index}>
                <h4>{page}</h4>
                {/* inner map over */}
                <div className='sub-links'>
                  {links.map((link, index) => {
                    const { label, icon, url } = link
                    return (
                      <Link
                        key={index}
                        to={url}
                        className='modal-links'
                        onClick={() => setIsModalOpen(false)}
                      >
                        <div className='sub-icon'>{icon}</div>
                        <h5 className='sub-label'>{label}</h5>
                      </Link>
                    )
                  })}
                </div>
              </article>
            )
          })}
          {/* link to sign in page */}
          <li>
            {!registration ? (
              <Link
                to='/signin'
                className='signin'
                onClick={() => setIsModalOpen(false)}
              >
                Sign in
              </Link>
            ) : (
              <h4 className='user'>
                <FaUser /> <span>{person}</span>
              </h4>
            )}
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default NavModal
