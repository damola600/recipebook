import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import SignUp from "./components/signup.component";
import SignIn from "./components/signin.component";
import HomePage from "./components/homepage.component";
import AddRecipe from "./components/add_recipe.component";
import ViewRecipe from "./components/view_recipes.component";
import SearchRecipe from "./components/search_recipe.component";
import Contact from "./components/contact.component";

function App() {

 
  return (
    
    <Router>
       <div className="container">
       <div id="intro" class="mx-auto">
            <h1><span class="badge badge-secondary">WELCOME TO RECIPE BOOK</span></h1>
        </div>
         <Navbar />
         <br/>
         
         <Route path="/signup" component={SignUp} />
         <Route path="/login"  component={SignIn} />
         <Route path="/home"  component={HomePage} />
         <Route path="/add"  component={AddRecipe} />
         <Route path="/view"  component={ViewRecipe} />
         <Route path="/search"  component={SearchRecipe} />
         <Route path="/contact" component={Contact} />
      </div>
        
         
        
    </Router>
     
    
    
  );
}

export default App;
