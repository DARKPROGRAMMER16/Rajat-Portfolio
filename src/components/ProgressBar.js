import React, { Fragment } from 'react'

const ProgressBar = (props) => {
    return (
        <Fragment>
            <div className="my-4">
                <h4 className="mx-3">{props.title}</h4>
                <div className="progress">
                    <div className={`progress-bar bg-${props.bg}`} role="progressbar" style={{width:props.pg}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{props.pg}</div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProgressBar
