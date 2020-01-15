import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../../App.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../store/actions/authActions';


class SignIn extends Component{
constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
        isLoaded: false
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
        password: '',
        isLoaded: true
    });
    this.props.signIn(this.state);
};

    render(){
        const { isLoaded } = this.state
        const { authError, auth } = this.props;
        if(auth.uid) return <Redirect to='/' />;
        return(
            <div className='container'>
                <form className='white' action="" onSubmit={this.handleSubmit.bind(this)}>
                    <h2 className="darken-text-3 center">Sign In</h2>
                    <div className='row'>
                    <div className='col l12 m12 s12 input-field'>
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               value={this.state.email}
                               id='email'
                               name='email'
                               required
                               onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className='col l12 m12 s12 input-field'>
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               value={this.state.password}
                               id='password'
                               name='password'
                               required
                               onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className='col l12 m12 s12 input-field center'>
                        <button type='submit' className='btn blue btn-large lighten-1 z-depth-2'>
                            Login{isLoaded ?
                            <div className="preloader-wrapper small active">
                            <div className="spinner-layer spinner-green-only">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div>
                                <div className="gap-patch">
                                    <div className="circle"></div>
                                </div>
                                <div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                            </div> : null}
                        </button>
                    </div>
                        <div className='red-text center'>
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state, 'state')
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth,
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (SignIn);


