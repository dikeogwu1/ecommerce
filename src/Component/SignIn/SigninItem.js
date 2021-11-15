import React, { useState, useRef, useEffect } from 'react'
import './signinItem.css'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaTimes } from 'react-icons/all'
// import Global store
import { useGlobalContext } from '../GlobalStore/Context'

const SigninItem = () => {
  const [regModal, setRegModal] = useState(false)
  const { person, setPerson, registration, setRegistration } =
    useGlobalContext()
  const nameContainer = useRef(null)

  useEffect(() => {
    if (person) {
      setRegistration(true)
    } else {
      setRegistration(false)
    }
  }, [registration, person, setRegistration])

  // handle registration submit
  const handleRegSubmit = (e) => {
    e.preventDefault()
    setRegModal(true)
    const userName = nameContainer.current.value
    setPerson(userName)
  }

  return (
    <section className='register-container'>
      <article
        className={`${
          regModal
            ? 'reg-modal-container  show-reg-modal'
            : 'reg-modal-container'
        }`}
      >
        <div className='reg-modal-wrapper'>
          <button
            className='reg-modal-close-btn'
            onClick={() => setRegModal(false)}
          >
            <FaTimes />
          </button>
          <div className='reg-modal-text'>
            <div>
              <FaCheckCircle className='order-successfull' />
            </div>
            <h2>success!</h2>
            <p>you have successfully created an acoount</p>
          </div>
          <Link to='/'>
            <button className='reg-modal-btn' onClick={setRegistration(true)}>
              continue as: <span>{person}</span>
            </button>
          </Link>
        </div>
      </article>
      <div className='register-wrapper'>
        <div className='register-tittle'>
          <h2>create account</h2>
          <p>Register to get access to our full services</p>
        </div>
        <form className='registration-form' onSubmit={handleRegSubmit}>
          <div className='first-input-group'>
            <label htmlFor='firstName'>First name</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              autoComplete='off'
              required
              ref={nameContainer}
            />

            <label htmlFor='lastName'>Last name</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              autoComplete='off'
              required
            />

            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' autoComplete='off' />

            <label htmlFor='phone'>Phone nunber</label>
            <input
              type='tel'
              id='phone'
              required
              name='phone'
              autoComplete='off'
            />

            <label htmlFor='pass'>Password</label>
            <input
              type='password'
              id='pass'
              name='password'
              autoComplete='off'
              required
            />
          </div>
          <div className='radio-input'>
            <label htmlFor='male'>Male</label>
            <input type='radio' id='male' name='gender' value='male' />
            <label htmlFor='female'>Female</label>
            <input
              type='radio'
              id='female'
              required
              name='gender'
              value='female'
            />
            <label htmlFor='other'>Other</label>
            <input type='radio' id='other' name='gender' value='other' />
          </div>
          <button type='submit' className='submit-register'>
            create account
          </button>
        </form>
      </div>
    </section>
  )
}

export default SigninItem
