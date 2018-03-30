import React, { Component , Fragment} from 'react';
class HeaderLogo extends Component {
  render() {
    return ( 
       <Fragment>
         <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <a className="navbar-brand">Assignment Solution 01 </a>
            </div>
        </nav>
       </Fragment>
    );
  }
}

export default HeaderLogo;
