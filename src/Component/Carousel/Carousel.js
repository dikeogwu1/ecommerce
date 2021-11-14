import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
// import carousel css
import './carousel.css'
// import carousel data
import { carouselData } from './carousel-data'

const Carousel = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (value > carouselData.length - 1) {
      setValue(0)
    }
    if (value < 0) {
      setValue(carouselData.length - 1)
    }
  }, [value])

  useEffect(() => {
    let duration = setInterval(() => {
      setValue(value + 1)
    }, 5000)
    return () => {
      clearInterval(duration)
    }
  }, [value])
  return (
    <>
      <div className='carousel-box'>
        {/* carousel container */}
        <article className='carousel-container'>
          {carouselData.map((data, index) => {
            const {
              id,
              title,
              desc,
              btn,
              img1,
              img2,
              img3,
              descColor,
              imageWrapper,
              icon,
              btnColor,
              link,
            } = data
            let coordinate = 'carousel-next'
            if (index === value) {
              coordinate = 'carousel-current'
            }
            if (
              index === value - 1 ||
              (value === 0 && index === carouselData.length - 1)
            ) {
              coordinate = 'carousel-prev'
            }

            return (
              <Link className={`carouse-item ${coordinate}`} key={id} to={link}>
                {/* carousel item description */}
                <div className={`carouse-desc ${descColor}`}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <button className={`carousel-btn ${btnColor}`}>
                    {btn} <span>{icon}</span>
                  </button>
                </div>
                {/* carousel images */}
                <div className={`carouse-image-wrapper ${imageWrapper}`}>
                  {/* first image */}
                  <div className='carousel-img-box'>
                    <img src={img1} alt='bag' />
                  </div>
                  {/* second image */}
                  <div className='carousel-img-box'>
                    <img src={img2} alt='wrist watch' />
                  </div>
                  {/* third image */}
                  <div className='carousel-img-box'>
                    <img src={img3} alt='shoe' />
                  </div>
                </div>
              </Link>
            )
          })}
          <button className='c-btn-left' onClick={() => setValue(value - 1)}>
            <FaChevronLeft />
          </button>
          <button className='c-btn-right' onClick={() => setValue(value + 1)}>
            <FaChevronRight />
          </button>
        </article>
      </div>
    </>
  )
}

export default Carousel
