import React from 'react'
import { Link } from 'react-router-dom'
// import footer css
import './footer.css'
// import footer icons
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container'>
      <hr />
      <section className='footer-wrapper'>
        <ul className='footer-item1'>
          <strong>buy</strong>
          <div className='footer-links'>
            <li>Registration</li>
            <li>Bidding & buying help</li>
            <li>Store</li>
          </div>
        </ul>
        <ul className='footer-item2'>
          <strong>sell</strong>
          <div className='footer-links'>
            <li>Start selling</li>
            <li>Learn to sell</li>
            <li>Affiliates</li>
          </div>
        </ul>
        <ul className='footer-item3'>
          <strong>stay connected</strong>
          <div className='footer-links'>
            <li>FAB's blog</li>
            <li>
              <FaFacebookSquare />
              <span> Facbook</span>
            </li>
            <li>
              <FaTwitter /> <span>Twitter</span>
            </li>
          </div>
        </ul>
        <ul className='footer-item4'>
          <strong>about FAB</strong>
          <div className='footer-links'>
            <li>company info</li>
            <li>news</li>
            <li>investors</li>
            <li>careers</li>
          </div>
        </ul>
        <ul className='footer-item5'>
          <strong>help & contact</strong>
          <div className='footer-links'>
            <li>seller infomation center</li>
            <li>contact us</li>
          </div>
        </ul>
      </section>
      <div className='footer-copyright'>
        <p>
          Copyright &copy; 2020-{new Date().getFullYear()} FAB's inc. all right
          reserved. <u>Accessibility</u> &nbsp; <u>USer agreement</u>
          &nbsp; <u>Privacy</u>
        </p>
        <Link to='/'>
          <h2 className='logo'>
            <span className='f'>f</span>
            <span className='a'>a</span>
            <span className='b'>b</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default Footer
