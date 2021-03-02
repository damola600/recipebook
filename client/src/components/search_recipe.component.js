import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
//https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
export default class SearchRecipe extends Component{
    state = {
        searchItem: "",
        meals: []
      };
    
      handleChangeMeal = event => {
        this.setState({ searchItem: event.target.value });
      };
    
      submitSearch = () => {
        this.callAPI(this.state.searchItem);
      };
    
      callAPI = searchRecipe => {
        var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchRecipe}`;
        fetch(searchUrl)
          .then(response => {
            return response.json();
          })
          .then(jsonData => {
            this.setState({ meals: jsonData.meals });
          });
      };
    
      render() {
        return (
          <div>
            <div id="intro" className="mx-auto">
                    <h3><span className="badge badge-secondary">SEARCH FOR RECIPE</span></h3>
                </div>
            <input
              name="text"
              type="text"
              placeholder="Search"
              className="form-control"
              onChange={event => this.handleChangeMeal(event)}
              value={this.state.searchItem}
            /><br/><br/>
            <button onClick={this.submitSearch} className="btn btn-primary btn-lg">Search</button>
            <Link to="/home" className="navbar-brand"><button type="submit" className="btn btn-primary btn-lg" id="btn_signup"> Back </button></Link>
            {this.state.meals ? (
              <div id="meals-container">
                {this.state.meals.map((meal, index) => (
                  <div class="single-meal" key={index}>
                     <h1>{meal.strMeal}</h1><br/>
                                <img src={meal.strThumb} alt="meal-pic"/><br/>
                                <div>
                                    <h3>Instructions</h3>
                                    <textarea className="form-control" rows="9">{meal.strInstructions}</textarea>
                                </div>
                              
                                
                                <div>
                                    <h3>Ingredients</h3>
                                     <ul>
                                        <li>{meal.strIngredient1}</li>
                                        <li>{meal.strIngredient2}</li>
                                        <li>{meal.strIngredient3}</li>
                                        <li>{meal.strIngredient4}</li>
                                        <li>{meal.strIngredient5}</li>
                                        <li>{meal.strIngredient6}</li>
                                        <li>{meal.strIngredient7}</li>
                                        <li>{meal.strIngredient8}</li>
                                        <li>{meal.strIngredient9}</li>
                                        <li>{meal.strIngredient10}</li>
                                        <li>{meal.strIngredient11}</li>
                                        <li>{meal.strIngredient12}</li>
                                        <li>{meal.strIngredient13}</li>
                                        <li>{meal.strIngredient14}</li>
                                        <li>{meal.strIngredient15}</li>
                                        <li>{meal.strIngredient16}</li>
                                        <li>{meal.strIngredient17}</li>
                                        <li>{meal.strIngredient18}</li>
                                        <li>{meal.strIngredient19}</li>
                                        <li>{meal.strIngredient20}</li>
                                    </ul>
                                </div>
                  </div>
                ))}
              </div>
            ) : (
              <p></p>
            )}
          </div>
        );
      }

}