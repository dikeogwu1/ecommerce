import React from 'react'
import reactDom from 'react-dom'
import App from './App'
// **** root css ****
import './index.css'
// **** import context ****
import Context from './Component/GlobalStore/Context'

reactDom.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
)
