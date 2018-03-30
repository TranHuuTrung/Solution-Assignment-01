import React from 'react'

const UserInput = (props) =>{
    const styleElement ={
        border: '1px solid red',
        marginBottom: '20px'
    }
    return(
        <div className="col-md-4 col-md-offset-4">
            <input 
                type="text" 
                className="form-control" 
                style={styleElement} 
                name="userName"
                value={props.currentName}
                onChange={props.onChangeName}
                placeholder="Input something" />
		</div>
    );
}

export default UserInput;