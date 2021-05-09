import React, { Fragment } from 'react'
import Typewriter from 'typewriter-effect'
import './Home.css'


const Home = () => {

    return (
        <Fragment>
        <div className="container">
            <div class="row h-100">
                <div class="col-sm-12 my-auto">
                    <div className="text-center">
                        <h1 id="UName">Rajat Dash</h1>
                        <h3 id="desc"><Typewriter
                              options={{
                                    strings: ['Web Developer', 'Tech Enthusiast','Full Stack Pratictioner'],
                                    autoStart: true,
                                    delay:'natural',
                                    loop: true,
                                }}
                        /></h3>
                        <div className="icons mt-3">
                            <a href="/"><i className="fa fa-facebook" id="fb"></i></a>
                            <a href="/"><i className="fa fa-instagram" id="ig"></i></a>
                            <a href="/"><i className="fa fa-linkedin" id="ln"></i></a>
                            <a href="/"><i className="fa fa-twitter" id="tw"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Home
