import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <Home/>
    </Fragment>
  )
}

export default App
