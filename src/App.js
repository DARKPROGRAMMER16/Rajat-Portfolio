import React, { Fragment, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loader from './components/Loader'
import FadeIn from 'react-fade-in';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {


  const [Loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() =>{
      setloading(false);
    },4000)
  },[])

  useEffect(() => {
    Aos.init({duration:2000});
  },[])

  return (
    <Fragment>
      {
        Loading ? <Loader
          loading={Loading}
        /> :
        <Fragment>
          <FadeIn delay={150} transitionDuration={2000}>
            <Navbar/>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
          </FadeIn>
        </Fragment>
      }
    </Fragment>
  )
}

export default App
