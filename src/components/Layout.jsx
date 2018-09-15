import React from "react"

import Header from './Header'

import 'bootstrap/dist/css/bootstrap.min.css';

export default ({ children }) => (
  <div>
    <Header></Header>
    {children}
  </div>
)
