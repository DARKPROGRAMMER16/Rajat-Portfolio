import React, { Fragment } from 'react'

const InterestCard = (props) => {
    return (
        <Fragment>
            <div className="col-md-3" id="icard">
               <div className="card" style={{boxShadow:`5px 5px 15px ${props.color}`}}>
                   <div className="card-body">
                       <i className={`fa fa-${props.ico} mr-3`} style={{color:`${props.color}`}}></i>
                       <span>{props.title}</span>
                   </div>
               </div>
            </div>
        </Fragment>
    )
}

export default InterestCard
