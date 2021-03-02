//this page is the homepage and it contains link to the other pages in this application
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component{
    
//render function for the html 
    render(){
        return(
            <div>
                 <div id="intro" class="mx-auto">
                    <h3><span class="badge badge-secondary">RECIPE BOOK HOMEPAGE</span></h3>
                </div>
            <div>
                
                <nav className="navbar navbar-dark bg-dark navbar-expand-xl">
                    <Link to="/home" className="navbar-brand">WELCOME</Link>
                    
                    <div className="collapse navbar-collapse" id="navbarSupported">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/add" className="nav-link">Add Recipe</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/search" className="nav-link">Search For Recipe</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/view" className="nav-link">View Recipes</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact Us</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
           
            
        );
    }
}