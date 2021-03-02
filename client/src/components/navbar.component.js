import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-xl">
                <Link to="/" className="navbar-brand">Use Recipe Book</Link>
                
                <div className="collapse navbar-collapse" id="navbarSupported">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Register to recipe book</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Signin to recipe book</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}