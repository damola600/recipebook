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

    

    componentDidMount(){
        this.recipeData();
    }

  

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

    displayRecipe = (recipe) => {
        if(!recipe.length) return null;
        return recipe.map((recipes, index) => (
            <div key = {index}>
                <h3>{recipes.mealname}</h3>
                <textarea className="form-control" rows="8">{recipes.instructions}</textarea>
                <textarea className="form-control" rows="8">{recipes.ingredients}</textarea>
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