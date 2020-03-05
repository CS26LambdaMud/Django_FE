import React from 'react';
import axios from 'axios';

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            credentials: {
                username: "",
                password1: "",
                password2: ""
            }
        }
    }

    addUser = e => {
        e.preventDefault();
        // axios.post('https://adv-project-test.herokuapp.com/api/registration/', this.state.credentials)
        axios.post('https://advapi.herokuapp.com/api/registration/', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.key)
            console.log('User created', res.data.key)
            this.props.history.push('/play');
        })
        .catch(err => {
            console.log(err)
        });
    };
    handleChange = e => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };
    render(){ 
    return(
        <div className='main-container'>
            <div className='signup'>
            <form
            onSubmit={this.addUser}>
                <input
                name="username"
                type="text"
                placeholder="Username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
                required/>
                
                <input
                name="password1"
                type="password"
                placeholder='Password'
                value={this.state.credentials.password1}
                onChange={this.handleChange}
                required/>

                 <input
                    name="password2"
                    type="password"
                    placeholder='re-enter password'
                    value={this.state.credentials.password2}
                    onChange={this.handleChange}
                    required /> 
                <button>Sign Up!</button>
            </form>
            </div>
        </div>
    )}
}

export default SignUp;