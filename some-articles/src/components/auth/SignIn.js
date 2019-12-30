import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

class SignIn extends Component{
constructor(props){
    super(props);
    this.state = {
        email: '',
        password: ''
    }
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
};

handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
        email: '',
        password: ''
    })
    console.log(this.state);
};

    render(){
        return(
            <div className='container'>
                <form action="" onSubmit={this.handleSubmit.bind(this)}>
                    <h2 className="grey-text darken-text-3 center">Sign In</h2>
                    <div className='row'>
                    <div className='col l12 input-field'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='email' onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className='col l12 input-field'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className='col l12 input-field center'>
                        <button type='submit' className='btn blue btn-large lighten-1 z-depth-2'>
                            Login
                        </button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;


