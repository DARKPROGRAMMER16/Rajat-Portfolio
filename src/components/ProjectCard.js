import React from 'react'

const ProjectCard = (props) => {
    return (
        <div className="col-md-6">
            <div className="team-single">
                <div className="content-area">
                    <div className="side-one">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="img-area">
                                    <img src={props.img} alt="img" />
                                </div>
                                <h4 className="mt-3">{props.title}</h4>
                                <p>{props.subdesc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="side-two">
                        <div className="card">
                            <div className="card-body text-center mt-4">
                                <h3>{props.title}</h3>
                                <p className="mt-4">{props.desc}</p>
                                <hr className="bg-light"/>
                                <h5>View it on</h5>
                                <a target="_blank" rel="noreferrer" href={props.link}>{props.link}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
