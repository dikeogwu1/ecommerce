import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
// import single item css
import './each.css'
import { useParams } from 'react-router-dom'
// import ecommerce store
import { ecommerce } from '../Lib/ecommerceData'
// import Global store
import { useGlobalContext } from '../GlobalStore/Context'
// import footer
import Footer from '../Footer/Footer'

const Each = () => {
  const [product, setProduct] = useState([
    {
      id: '',
      variant: '',
      type: '',
      name: ``,
      brand: ``,
      img: ``,
      price: '',
      offer: '',
      shiping: ``,
    },
  ])
  const [simillar, setSimillar] = useState([
    {
      id: '',
      img: ``,
      price: '',
      offer: '',
    },
  ])
  const [inCart, setInCart] = useState(false)
  const { setCart, cart } = useGlobalContext()
  const addContainer = useRef(null)
  const { id } = useParams()
  const newId = parseInt(id)

  useEffect(() => {
    const single = ecommerce.find((item) => item.id === newId)
    setProduct([single])

    const fill = ecommerce.filter((one) => {
      return one.variant === single.variant && one.id !== single.id
    })
    setSimillar(fill)

    const added = cart.find((stuff) => stuff.id === newId)

    if (added) {
      setInCart(true)
    } else {
      setInCart(false)
    }

    window.scrollTo({ top: 0 })
  }, [id, newId, inCart])
  // add item to cart function
  const addToCart = (e) => {
    setInCart(true)
    const itemId = parseInt(e.currentTarget.dataset.id)
    const items = ecommerce.find((item) => item.id === itemId)
    setCart([...cart, items])
  }

  return (
    <main className='single-container'>
      <section className='single-wrapper'>
        {product.map((item) => {
          const { id, img, variant, brand, offer, price, name, type, shiping } =
            item
          return (
            <article className='single-item' key={id}>
              <div className='single-img-wrapper'>
                <img src={img} alt={variant} className='single-img' />
              </div>
              <div className='single-info'>
                <h4>
                  Name: <span>{name}</span>
                </h4>
                <h4>
                  Price: <span>{offer ? `$${offer}` : `$${price}`}</span>
                </h4>
                <h4>
                  Category: <span>{variant}</span>
                </h4>
                <p>{brand}</p>
                <h4>
                  Shipping: <small>{shiping}</small>
                </h4>
                <p>{type}</p>
                <br />
                <br />
                <div className='single-btn'>
                  <button
                    className='s-add-to-cart'
                    onClick={addToCart}
                    disabled={inCart ? true : false}
                    ref={addContainer}
                    data-id={id}
                  >
                    <FaCartPlus />{' '}
                    <span>{`${
                      !inCart
                        ? 'Add this item to Cart'
                        : 'item has been added to cart'
                    }`}</span>
                  </button>
                </div>
              </div>
            </article>
          )
        })}
      </section>

      <hr />
      <section className='single-design'>
        <h3 className='design-text'>
          with <span className='f'>f</span>
          <span className='a'>a</span>
          <span className='b'>b</span>
          &nbsp; shopping have never been easier
        </h3>
        <h4>our long team existance is your long time of endless petronage</h4>
        <p>thank you for shopping with us</p>
      </section>

      <section className='simillar-container'>
        <h3>simillar products</h3>
        <div className='simillar-wrap'>
          {simillar.map((sim) => {
            const { img, id, price, offer } = sim
            return (
              <Link key={id} className='simillar-box' to={`${id}`}>
                <div className='simillar-img-wrapper'>
                  <img src={img} alt='product' className='simillar-img' />
                </div>
                <div className='m-r-price-wrapper'>
                  <del>{offer ? `$${price}` : null}</del>
                  <span>{!offer ? `$${price}` : `$${offer}`}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Each
