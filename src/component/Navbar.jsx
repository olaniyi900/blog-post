import React from 'react';
import './navbar.css';
const Navbar = () => {

    
    
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="btnstyle navbar-brand">Navbar</button>
        <button className="btnstyle navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <button className="btnstyle nav-item nav-link active">Home <span className="sr-only">(current)</span></button>
        <button className="btnstyle nav-item nav-link">Features</button>
        <button className="btnstyle nav-item nav-link">Pricing</button>
        </div>
        </div>
        </nav>

             );
}
 
export default Navbar;