import React, { Fragment } from 'react'
import './About.css'
import PROFILE from '../assets/images/profile-pic-4.png'
import ProgressBar from './ProgressBar'

const About = () => {
    return (
       <Fragment>
        <div className="about m-5" id="about">
               <div className="container">
                   <div className="row">
                       <div className="col-md-6 mb-5">
                           <img src={PROFILE} alt="imagess" className="img-fluid"/>
                       </div>
                       <div className="col-md-6 aboutH">
                           <h1 className="text-center">Know More About me</h1>
                           <hr className="bg-primary"/>
                           <div className="bullet_points my-5">
                               <div className="row">
                                   <div className="col-md-6">
                                       <ul>
                                           <li><strong>Age : </strong>20</li>
                                           <br />
                                           <li><strong>City : </strong>New Delhi</li>
                                       </ul>
                                   </div>
                                   <div className="col-md-6">
                                       <ul>
                                           <li><strong>Degree : </strong>UnderGraduate</li>
                                           <br />
                                           <li><strong>Status : </strong>Student</li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                           <div className="about_me_para text-center mt-3">
                               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque atque sed repellendus ipsum dignissimos nobis eaque, nihil ullam possimus!</p>
                               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate sapiente nemo modi dolores beatae quisquam, iusto doloremque suscipit ad atque!</p>
                               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate sapiente nemo modi dolores beatae quisquam, iusto doloremque suscipit ad atque!</p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        
        <div className="skills m-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h1>Skills</h1>
                        <hr className="bg-warning"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <ProgressBar
                            title="Html"
                            bg="danger"
                            pg="80%"
                        />
                        <ProgressBar
                            title="Css"
                            bg="primary"
                            pg="65%"
                        />
                        <ProgressBar
                            title="Javascript"
                            bg="warning"
                            pg="70%"
                        />
                        <ProgressBar
                            title="NodeJS"
                            bg="success"
                            pg="50%"
                        />
                        <ProgressBar
                            title="ExpressJS"
                            bg="warning"
                            pg="50%"
                        />
                        <ProgressBar
                            title="ReactJS"
                            bg="info"
                            pg="70%"
                        />
                        <ProgressBar
                            title="MongoDb"
                            bg="success"
                            pg="50%"
                        />
                    </div>

                    <div className="col-md-6">
                        <ProgressBar
                            title="C++"
                            bg="primary"
                            pg="70%"
                        />
                        <ProgressBar
                            title="Python"
                            bg="success"
                            pg="80%"
                        />
                        <ProgressBar
                            title="Java"
                            bg="danger"
                            pg="20%"
                        />
                        <ProgressBar
                            title="Linux System"
                            bg="info"
                            pg="60%"
                        />
                        <ProgressBar
                            title="GIT/Cli"
                            bg="secondary"
                            pg="70%"
                        />
                        <ProgressBar
                            title="Django"
                            bg="success"
                            pg="50%"
                        />
                        <ProgressBar
                            title="My SQL"
                            bg="primary"
                            pg="50%"
                        />
                    </div>
                </div>
            </div>
        </div>


       </Fragment>
    )
}

export default About
