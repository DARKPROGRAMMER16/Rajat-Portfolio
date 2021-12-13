import React, { Fragment } from 'react'
import Typewriter from 'typewriter-effect'
import './Home.css'


const Home = () => {

    return (
        <Fragment>
        <div className="home" id="home" data-aos="fade-right">            
            <div className="container home2">
                <div className="row h-100">
                    <div className="col-sm-12 my-auto">
                        <div className="text-center">
                            <h1 id="UName">Rajat Dash</h1>
                            <h3 id="desc"><Typewriter
                                options={{
                                        strings: ['Web Developer', 'Tech Enthusiast','Full Stack Practitioner'],
                                        autoStart: true,
                                        delay:'natural',
                                        loop: true,
                                    }}
                            /></h3>
                            <div className="icons mt-3">
                                <a href="https://www.facebook.com/profile.php?id=100009558967585" target="_blank" rel="noreferrer"><i className="fa fa-facebook" id="fb"></i></a>
                                <a href="https://www.instagram.com/rajat16.rd/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" id="ig"></i></a>
                                <a href="https://www.linkedin.com/in/rajatdash/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" id="ln"></i></a>
                                <a href="https://github.com/DARKPROGRAMMER16" target="_blank" rel="noreferrer"><i className="fa fa-github" id="tw"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Home
