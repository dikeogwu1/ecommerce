import React, { useState, useEffect } from 'react'
// import featured css
import './featured.css'
import { FaAngleDown, FaAngleUp } from 'react-icons/all'
// import global store
import { useGlobalContext } from '../GlobalStore/Context'
// import ecommerce store
import { ecommerce } from '../Lib/ecommerceData'
import Items from './Items'

const Featured = () => {
  const {
    input,
    submit,
    setSubmit,
    showCategories,
    setShowCategories,
    setInput,
    items,
  } = useGlobalContext()
  const [category, setCategory] = useState([
    {
      id: '',
      variant: '',
      type: '',
      name: ``,
      brand: ``,
      img: ``,
      price: '',
      offer: '',
    },
  ])

  // effect for initial render
  useEffect(() => {
    let upper = input.charAt(0).toUpperCase()
    upper += input.substring(1)
    if (input) {
      const search = ecommerce.filter((item) => {
        return item.name.includes(upper) || item.variant.includes(upper)
      })
      setCategory(search)
      setSubmit(true)
    }
    setShowCategories(false)
  }, [])

  // submit function for features page
  const handleSubmit = (e) => {
    e.preventDefault()
    let upper = input.charAt(0).toUpperCase()
    upper += input.substring(1)
    if (input) {
      const search = ecommerce.filter((item) => {
        return item.name.includes(upper) || item.variant.includes(upper)
      })
      setCategory(search)
      setSubmit(true)
    }
  }

  // close category dropdown by clicking any where function
  const handleOver = (e) => {
    if (!e.target.classList.contains('sub')) {
      setShowCategories(false)
    } else {
      setShowCategories(true)
    }
  }

  // search by category function
  const handleCategory = (e) => {
    const items = e.currentTarget.textContent
    setInput(items)
    setSubmit(true)
    const check = ecommerce.filter((item) => {
      return item.variant === items
    })
    setCategory(check)
  }

  return (
    <div className='featured-container' onClick={handleOver}>
      <div className='form-container'>
        <form id='search-form' onSubmit={handleSubmit}>
          <label htmlFor='search'>Shop by searching</label>
          <div className='search-category'>
            <input
              type='text'
              id='search'
              autoComplete='off'
              placeholder='Search for any product'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {/* Categories toggler */}
            <div
              className='category-icon'
              onClick={() => setShowCategories(!showCategories)}
            >
              <span className='sub'>Categories</span>
              {showCategories ? <FaAngleUp /> : <FaAngleDown className='sub' />}
            </div>

            <button type='submit' className='submit-search'>
              Search
            </button>
          </div>
        </form>
        <div
          className={
            showCategories ? 'all-categories show-categories' : 'all-categories'
          }
        >
          <ul>
            {items.map((item, index) => {
              return (
                <li key={index} className='sub' onClick={handleCategory}>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {/* all Featured product */}
      <hr />
      <h3>explore all featured product</h3>
      <section className='feature-wrapper'>
        {(submit ? category : ecommerce).map((product) => {
          const { id } = product
          return (
            <article key={id}>
              <Items product={product} />
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default Featured
