import React, { Component } from 'react';
import Homepage from "./homepage.component.js";
import axios from 'axios';
export default class SignIn extends Component{
    constructor(props){
        super(props);
//constructor for the functions
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
         }
    }
//this function calls the backend and gets the username and password from the database
    componentDidMount(){
        axios.get('/users/' + this.props.match.params.id )
             .then(response => {
                 this.setState({
                     username: response.data.username,
                     password: response.data.password
                 })
             })
             .catch(function (error){
                 console.log(error);
             })
    }
//functions to check state of the form input
    changeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    
    changePassword(e){
        this.setState({
            password: e.target.value
        });
    }
//this function is called when the form is submitted
    handleSubmit(e){
        e.preventDefault();

        const login = {
            username: this.state.username,
            password: this.state.password,
        };

        console.log(login);

        this.setState({
            username: ''
        })

        window.location = "/home";
    }
//this funcion is used to display the html form
    render(){
        return(
            <div>
                <div id="intro" className="mx-auto">
                    <h3><span className="badge badge-secondary">SIGNIN</span></h3>
                </div>

                <div>
                    <form onSubmit={this.handleSubmit} id="loginform" method="post">
                        <div class="form-group">
                            <label for="username">UserName</label>
                            <input type="text" className="form-control" id="uname" value={this.state.username} onChange={this.changeUsername}/>
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="spass" value={this.state.password} onChange={this.changePassword}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg" id="btn_signup"> Submit </button>
                    </form> 
                </div>
            </div>
            

        );
    }
}