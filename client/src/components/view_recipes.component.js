import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class ViewRecipe extends Component{
    constructor(props){
        super(props);

        this.state={
            recipe: []
        };
    }

    
//this function calls the recipeData() function
    componentDidMount(){
        this.recipeData();
    }

  
//this function gets the list of recipe from the database using axios
    recipeData =() =>{
        axios.get('/recipes/')
             .then((response) => {
                 const data = response.data;
                 this.setState({recipe: data});
                 console.log("got the recipe");
             })
             .catch(() => {
                 alert("error retrieving data");
             });
    }
//this function displays the recipe on the page as an html form
    displayRecipe = (recipe) => {
        if(!recipe.length) return null;
        return recipe.map((recipes, index) => (
            <div key = {index}>
                <h2><span className="badge badge-secondary">Meal Name</span></h2>
                <h3>{recipes.mealname}</h3>
                <h2><span className="badge badge-secondary">Instructions</span></h2>
                <li>{recipes.instructions}</li>
                <h2><span className="badge badge-secondary">Ingredients</span></h2>
                <li>{recipes.ingredients}</li>
            </div>
        ));
    };


    render() {
        return(
            <div>
                <div id="intro" className="mx-auto">
                    <h3><span className="badge badge-secondary">VIEW RECIPE</span></h3>
                </div>
                
                    <div>
                        { this.displayRecipe(this.state.recipe) }
                    </div>
                        
                    
               
                <Link to="/home" className="navbar-brand"><button type="submit" className="btn btn-primary btn-lg" id="btn_signup"> Back </button></Link>
            </div>
        );
    }
    
}