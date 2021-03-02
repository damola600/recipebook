 import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class AddRecipe extends Component{
    constructor(props){
        super(props);
        this.changeIngredients = this.changeIngredients.bind(this);
        this.changeInstructions = this.changeInstructions.bind(this);
        this.changeMealName = this.changeMealName.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            username: '',
            mealname: '',
            instructions: '',
            ingredients: ''
        };
    }

    changeIngredients(e){
        this.setState({
            ingredients: e.target.value
        });
    }

    changeInstructions(e){
        this.setState({
            instructions: e.target.value
        });
    }

    changeMealName(e){
        this.setState({
            mealname: e.target.value
        });
    }

    changeUserName(e){
        this.setState({
            username: e.target.value
        });
    }

    // componentDidMount(){
    //     this.setState({
    //         users: ['recipebook recipe'],
    //         recipename: 'recipebook recipe',
    //         mealname: 'recipebook recipe',
    //         instructions: 'recipebook recipe',
    //         ingredients: 'recipebook recipe'
          
            
    //     });
    // }

    handleSubmit(e){
        e.preventDefault();

        const recipe = {
            username: this.state.username,
            mealname: this.state.mealname,
            instructions: this.state.instructions,
            ingredients: this.state.ingredients
        };

        axios.post('/recipes/add', recipe)
             .then(res => console.log(res.data));
       

        window.location = "/home";
    }

     render(){
         return(
             <div>
                 <div id="intro" className="mx-auto">
                    <h3><span className="badge badge-secondary">ADD A RECIPE</span></h3>
                </div>

                <div>
                    <form  id="add_recipeform" method="post" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                            <label for="username">User Name</label>
                            <input type="text" className="form-control" id="rname" value={this.state.username} onChange={this.changeUserName}/>
                        </div>

                        <div class="form-group">
                            <label for="mealname">Meal Name</label>
                            <input type="text" className="form-control" id="mname" value={this.state.mealname} onChange={this.changeMealName}/>
                        </div>

                        <div class="form-group">
                            <label for="instructions">Instructions</label>
                            <textarea className="form-control" id="instruct" rows="8" value={this.state.instructions} onChange={this.changeInstructions}></textarea>
                        </div>

                        <div class="form-group">
                            <label for="ingredients">Ingredients</label>
                            <textarea className="form-control" id="ingre" rows="8" value={this.state.ingredients} onChange={this.changeIngredients}></textarea>
                        </div>

                       
                        <button type="submit" className="btn btn-primary btn-lg" id="btn_signup"> Submit </button>
                        <Link to="/home" className="navbar-brand"><button type="submit" className="btn btn-primary btn-lg" id="btn_signup"> Back </button></Link>
                    </form> 
                </div>
             </div>
         );
    }
    
 }