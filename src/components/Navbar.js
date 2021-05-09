import React, { Fragment } from 'react';

import './Navbar.css'

const Navbar = () => {
    return (
        <Fragment>            
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand ml-lg-5 navtitle" href="/"><h1>Rajat Dash</h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-lg-5 navtabs">
                        <li className="nav-item">
                            <a className="nav-link" href="/"><p>Home</p><span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about"><p>About</p></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/services"><p>Services</p></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact"><p>Contact</p></a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar
