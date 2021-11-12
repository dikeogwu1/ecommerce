import React, { useRef, useState, useEffect } from 'react'
import './offer.css'
// months array
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
// weekdays array
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const SpecialOffer = () => {
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMins, setTimerMins] = useState('00')
  const [timerSecs, setTimerSecs] = useState('00')

  // get dates
  let aheadDate = new Date()
  let aheadDay = aheadDate.getDate()
  let aheadMonth = aheadDate.getMonth()
  let aheadYear = aheadDate.getFullYear()

  // future dates
  const upFront = new Date(aheadYear, aheadMonth, aheadDay + 6, 11, 30, 0)

  const year = upFront.getFullYear()
  const hours = upFront.getHours()
  const minutes = upFront.getMinutes()

  let month = upFront.getMonth()
  month = months[month]
  const weekday = weekdays[upFront.getDay()]
  const date = upFront.getDate()

  // counting down to end date
  let countDown = useRef()

  const startCountDown = () => {
    const countDownTime = upFront.getTime()
    countDown = setInterval(() => {
      const latest = new Date().getTime()
      const distance = countDownTime - latest
      const downDay = Math.floor(distance / (1000 * 60 * 60 * 24))
      const downHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const downMins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const downSecs = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(countDown.current)
      } else {
        // update time
        setTimerDays(downDay)
        setTimerHours(downHours)
        setTimerMins(downMins)
        setTimerSecs(downSecs)
      }
    }, 1000)
  }

  useEffect(() => {
    startCountDown()
    return () => {
      clearInterval(countDown.current)
    }
  })

  // offer ended dates
  const ended = new Date(aheadYear, aheadMonth, aheadDay - 1, 11, 30, 0)

  const endYear = ended.getFullYear()
  const endHours = ended.getHours()
  const endMinutes = ended.getMinutes()

  let endMonth = ended.getMonth()
  endMonth = months[endMonth]
  const endWeekday = weekdays[ended.getDay()]
  const endDate = ended.getDate()

  return (
    <section className='offer-container'>
      <article className='first-offer'>
        <div className='offer-image-wrapper'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1635430095/my%20images/photo-1624006930503-6d20b0717097_r8uqu0.jpg'
            alt='phone'
          />
        </div>
        <aside className='offer-desc'>
          <h3>IPhone X - 64GB special offer</h3>
          <h4>
            offer ends on{' '}
            <span>{`${weekday}, ${date} ${month} ${year} ${hours}: ${minutes} am`}</span>
          </h4>
          <p>
            Buy up to $2000 worth of any fab product to receive this offer, note
            that this offer is not available for any purchase below the
            specified amount.
          </p>
          <div className='count-down-wrapper'>
            <article className='format'>
              <div className='time'>
                <h3>{timerDays}</h3>
                <p>days</p>
              </div>
            </article>
            <article className='format'>
              <div className='time'>
                <h3>{timerHours}</h3>
                <p>hours</p>
              </div>
            </article>
            <article className='format'>
              <div className='time'>
                <h3>{timerMins}</h3>
                <p>min</p>
              </div>
            </article>
            <article className='format'>
              <div className='time'>
                <h3>{timerSecs}</h3>
                <p>secs</p>
              </div>
            </article>
          </div>
        </aside>
      </article>

      {/* second offer */}
      <article className='second-offer'>
        <div className='s-offer-image-wrapper'>
          <div className='s-img-box'>
            <img
              src='https://res.cloudinary.com/dikeogwu1/image/upload/v1635420992/my%20images/s-l225_kdeqk5.webp'
              alt='phone'
            />
          </div>
          <div className='s-img-box'>
            <img
              src='https://res.cloudinary.com/dikeogwu1/image/upload/v1635427894/my%20images/s-l225_ru8lkr.jpg'
              alt='phone'
            />
          </div>
          <div className='s-img-box'>
            <img
              src='https://res.cloudinary.com/dikeogwu1/image/upload/v1635425074/my%20images/daniel-storek-JM-qKEd1GMI-unsplash_gx0edj.jpg'
              alt='phone'
            />
          </div>
        </div>
        <aside className='offer-desc'>
          <h3>new fashion special offer</h3>
          <h4>
            offer ends on{' '}
            <span>{`${endWeekday}, ${endDate} ${endMonth} ${endYear} ${endHours}: ${endMinutes} am`}</span>
          </h4>
          <p>
            Buy up to $2000 worth of any fab fashion product to stand a chance
            of wining any of the item beside, note only from the minimiun of the
            specified amount qualify.
          </p>
          <div>
            <h3 id='offer-ended'>sorry this offer has ended</h3>
          </div>
        </aside>
      </article>
    </section>
  )
}

export default SpecialOffer
