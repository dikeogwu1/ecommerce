import React, { useEffect } from 'react'
import './contact.css'

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className='contact-container'>
      <section className='contact-us'>
        <div className='contact-img-wrapper'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1636238022/my%20images/WM2A2754.jpg_wg32xk.jpg'
            alt='customer care'
          />
        </div>

        <div className='contact-tittle'>
          <h2>customers care</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id autem
            inventore alias dolorum dolorem reprehenderit omnis nemo incidunt
            saepe illo! Est quod beatae dicta. Exercitationem Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Perferendis voluptatibus
            laborum fugit voluptatum ipsum dignissimos asperiores vel aut a
            aperiam.?
          </p>
          <h4>
            call: <span>004832176</span>
          </h4>
        </div>
      </section>
      {/* second contact */}
      <section className='contact-us'>
        <div className='contact-tittle'>
          <h2>partner with us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id autem
            inventore alias dolorum dolorem reprehenderit omnis nemo incidunt
            saepe illo! Est quod beatae dicta. Exercitationem Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Perferendis voluptatibus
            laborum fugit voluptatum ipsum dignissimos asperiores vel aut a
            aperiam.?
          </p>
          <h4>
            call: <span>014832004</span>
          </h4>
        </div>

        <div className='contact-img-wrapper'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1636238145/my%20images/_DSC5175.jpg_g4kx8n.jpg'
            alt='customer care'
          />
        </div>
      </section>

      <section className='inquiries'>
        <p>
          for more inquiries on <span className='f'>f</span>
          <span className='a'>a</span>
          <span className='b'>b</span> product and services
        </p>
        <h4>
          call us on: <span>0224997815</span>
        </h4>
      </section>

      <section className='inquiries-2'>
        <div>
          <p> for sponsorship and related</p>
          <h4>
            also call on: <span>0224997815</span>
          </h4>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
