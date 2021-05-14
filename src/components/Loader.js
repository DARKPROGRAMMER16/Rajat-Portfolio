import React, { Fragment } from 'react'
import './Loader.css'
import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = (props) => {
    return (
        <Fragment>
            <div className="loader">
                <div className="container loader2">
                    <div className="row h-100">
                        <div className="col-sm-12 my-auto">
                            <div className="text-center">
                            <PropagateLoader color={'cyan'} loading={props.loading} size={15} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Loader
