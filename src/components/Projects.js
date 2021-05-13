import React, { Fragment } from 'react'
import './Projects.css'
import IMG from '../assets/images/cod.png'
import IMG2 from '../assets/images/rtc.png'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <Fragment>
            <div className="projects my-5">
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
                   </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Projects
