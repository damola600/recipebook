import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
//import SearchRecipe from "./search_recipe.component.js";
//import AddRecipe from "./add_recipe.component.js";
//import ViewRecipe from "./view_recipes.component.js";
export default class HomePage extends Component{
    

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

                            {/* <li className="nav-item">
                                <Link to="/list" className="nav-link">List Meal Categories</Link>
                            </li> */}

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
           
            
        );
    }
}