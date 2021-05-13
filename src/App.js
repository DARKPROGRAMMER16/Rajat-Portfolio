import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
    </Fragment>
  )
}

export default App
