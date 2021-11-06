import React from 'react'
import './search.css'
import { FaAngleDown, FaAngleUp } from 'react-icons/all'
import { Link } from 'react-router-dom'
// import global store
import { useGlobalContext } from '../GlobalStore/Context'

const Search = () => {
  const {
    showCategories,
    setSubmit,
    items,
    setShowCategories,
    input,
    setInput,
  } = useGlobalContext()

  // submit search
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // search by category
  const handleClick = (e) => {
    setInput(e.currentTarget.textContent)
    setSubmit(true)
  }

  return (
    <>
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
              <span>Categories</span>
              {showCategories ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            <Link to='/features' type='submit' className='submit-search'>
              Search
            </Link>
          </div>
        </form>
        <div
          className={
            showCategories
              ? 'all-categories show-categories spacial'
              : 'all-categories'
          }
        >
          <ul>
            {items.map((item, index) => {
              return (
                <Link
                  key={index}
                  to='/features'
                  className='search-sub-link'
                  onClick={handleClick}
                >
                  {item}
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Search
