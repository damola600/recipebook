import React, { Component } from 'react';
import SignIn from "./signin.component.js";
import axios from 'axios';

export default class SignUp extends Component{
    constructor(props){
        super(props);

        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);

        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email:'',
            password:''
        }
    }

    
//this functions check the state of the forms input and then changes it if it is changed
    onChangeFirstname(e){
        this.setState({
            firstname: e.target.value
        });
    }

    onChangeLastname(e){
        this.setState({
            lastname: e.target.value
        });
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }
//this function is called when the form is submited and then saves the user information in the database
    onHandleSubmit(e){
        e.preventDefault();

        const register = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };

        //console.log(register);
        axios.post('/users/add', register)
             .then(res => console.log(res.data));
        window.location = "/login";
    }

    render(){
        return(
            <div>
                <div id="intro" className="mx-auto">
                    <h3><span className="badge badge-secondary">SIGNUP</span></h3>
                </div>

                <div>
                    <form onSubmit={this.onHandleSubmit}  id="regform" method="post">
                        <div class="form-group">
                            <label for="firstname">First Name</label>
                            <input type="text" className="form-control" id="fname" value={this.state.firstname} onChange={this.onChangeFirstname}/>
                        </div>

                        <div class="form-group">
                            <label for="Lastname">Last Name</label>
                            <input type="text" className="form-control" id="lname" value={this.state.lastname} onChange={this.onChangeLastname}/>
                        </div>

                        <div class="form-group">
                            <label for="username">UserName</label>
                            <input type="text" className="form-control" id="uname" value={this.state.username} onChange={this.onChangeUsername}/>
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="uemail" value={this.state.email} onChange={this.onChangeEmail}/>
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="upass" value={this.state.password} onChange={this.onChangePassword}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg" id="btn_signup"> Submit </button>
                    </form> 
                </div>
            </div>
            

        );
    }
}