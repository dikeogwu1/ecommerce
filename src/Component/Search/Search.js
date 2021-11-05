import React from 'react'
import './search.css'
import { FaAngleDown, FaAngleUp } from 'react-icons/all'
// import global store
import { useGlobalContext } from '../GlobalStore/Context'
const Search = () => {
  const { showCategories, setShowCategories } = useGlobalContext()

  return (
    <>
      <div className='form-container'>
        <form action='/features' method='Get' id='search-form'>
          <label htmlFor='search'>Shop by searching</label>
          <div className='search-category'>
            <input
              type='text'
              id='search'
              placeholder='Search for any product'
            />
            {/* Categories toggler */}
            <div
              className='category-icon'
              onClick={() => setShowCategories(!showCategories)}
            >
              <span>Categories</span>
              {showCategories ? <FaAngleUp /> : <FaAngleDown />}
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
            <li>Bags</li>
            <li>Shoes</li>
            <li>Clothes</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Search
