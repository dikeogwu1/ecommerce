import React from 'react'
// **** react router dom ****
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// **** Import all pages ****
import NavBar from './Component/Nav/NavBar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Discount from './Pages/Discount'
import Offer from './Pages/Offer'
import Features from './Pages/Features'
import Help from './Pages/Help'
import Contact from './Pages/Contact'
import OderHistory from './Pages/OderHistory'
import Signin from './Pages/Signin'
import Error from './Pages/Home'
import SingleItem from './Pages/SingleItem'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <Router>
      {/* navBar component */}
      <NavBar />
      <Switch>
        {/* Home page */}
        <Route exact path='/'>
          <Home />
        </Route>

        {/* Help page */}
        <Route path='/help'>
          <Help />
        </Route>

        {/* Contact page */}
        <Route path='/contact'>
          <Contact />
        </Route>

        {/* Offer page */}
        <Route path='/offer'>
          <Offer />
        </Route>

        {/* Discount page */}
        <Route path='/discount'>
          <Discount />
        </Route>

        {/* Features page */}
        <Route path='/features'>
          <Features />
        </Route>

        {/* Oder history page */}
        <Route path='/oderHistory'>
          <OderHistory />
        </Route>

        {/* sign in page */}
        <Route path='/signin'>
          <Signin />
        </Route>

        {/* Cart in page */}
        <Route path='/cart'>
          <Cart />
        </Route>
        {/* Cart in page */}
        <Route path='/about'>
          <AboutUs />
        </Route>

        {/* Item info page */}
        <Route path='/singleItem/:id' children={<SingleItem />} />

        {/* Error page */}
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
