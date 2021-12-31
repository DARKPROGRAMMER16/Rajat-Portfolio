import React, { Fragment } from 'react'
import './Projects.css'
import IMG from '../assets/images/cod.png'
import IMG2 from '../assets/images/rtc.png'
import IMG3 from '../assets/images/rtvc.png'
import IMG4 from '../assets/images/krypt.png'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <Fragment>
            <div className="projects my-5" id="projects" data-aos="flip-right">
                <div className="container">
                   <h1 className="text-center">My Projects</h1>
                   <div className="row">
                        <ProjectCard
                            img={IMG}
                            title="Covid'19 DashBoard"
                            subdesc="real-time covid data"
                            desc="A react based web app that delivers COVID-19 related statistics throught the world using API and presented in a very elegant manner and with a minimilistic UI design"
                            link="https://covid18-dashbaord.herokuapp.com/"
                        />
                        <ProjectCard
                            img={IMG2}
                            title="Real-time Chat application"
                            subdesc="simple on time chat app"
                            desc="A simple NodeJS and Socket.io based chat application that allows the user connect with others in real time and have conversations."
                            link="https://rtc-2.herokuapp.com/"
                        />
                        <ProjectCard
                            img={IMG3}
                            title="Real-time Video Calling App"
                            subdesc="simple and minimilistic video calling app"
                            desc="A video calling web app built on with the help of Socket.io and Peerjs as in backend technology and Reactjs for frontend interaction."
                            link="https://real-time-video-chat-app.netlify.app/"
                        />
                        <ProjectCard
                            img={IMG4}
                            title="Krypt - A Ethereum Exchange App"
                            subdesc="simple and basic ethereum exchange web application"
                            desc="A Web App built on ReactJs with Vite HMR and Solidity for blockchain interactions and exchange operations."
                            link="https://krypt-web3.netlify.app/"
                        />
                   </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Projects
