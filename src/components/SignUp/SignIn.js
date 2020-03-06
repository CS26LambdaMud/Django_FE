import React from 'react';
import axios from 'axios';

import './Styles.scss'

class SignIn extends React.Component {
    constructor(props){
      super(props)

      this.state={
        credentials:{
          username: '',
          password: ''
        },
          error: ''
        }
      };
    handleChange = e => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };
    handleSubmit = e => {
        // let localStorage;
        e.preventDefault();
        axios.post('https://advapi.herokuapp.com/api/login/', this.state.credentials)
        // axios.post('https://adv-project-test.herokuapp.com/api/login/', this.state.credentials)
        .then(res => {
            console.log('Res', res.data.key)
           localStorage.setItem('token', res.data.key)
            console.log('Signed in Successful')
            this.props.history.push('/play');
        })
        .catch(err => {
            this.setState({
                ...this.state,
                error: 'Incorrect username or password'
            })
            console.log(err)
        })
    }
    render(){
        return(
            <div className='main-container'>
                <div className='signin'>
                <form onSubmit={this.handleSubmit}>
                    <input
                    className='input'
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    required/>
                    <br/>
                    <input
                    className='input'
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    placeholder="password"
                    required/>
                    <button className='btn' >Login</button>
                    <p className='login-error'>
                        {this.state.error ? this.state.error : null}
                    </p>
                </form>
                </div>
            </div>
        )
    }
}

export default SignIn;
