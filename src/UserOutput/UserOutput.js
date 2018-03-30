import React  from 'react'
import './UserOutput.css'
const UserOutput = (props) =>{
    return(
        <div className="col-md-4 col-md-offset-4">
 
            <div className="panel panel-success UserOutput">
                  <div className="panel-heading">
                        <h3 className="panel-title">Username: {props.userName}</h3>
                  </div>
                  <div className="panel-body">
                        Welcome <span className="highLight">{props.userName}</span> to my assignment solution
                  </div>
            </div>
            
         </div>
    );
    
}

export default UserOutput;