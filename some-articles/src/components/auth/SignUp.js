import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../../App.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';


class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = ({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isLoaded: false
        })
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.signUp(this.state)
        console.log(this.state);

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isLoaded: true
        });

    };


    render() {
        const { isLoaded } = this.state
        const { auth, authError } = this.props;
        if(auth.uid) return <Redirect to='/' />;

        return (
            <div className='container'>
                <form action="" onSubmit={this.handleSubmit.bind(this)}  className='white'>
                    <h2 className="text-grey center">Sign Up</h2>
                    <div className='row'>
                        <div className='col l6 m6 input-field'>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text"
                                   required
                                   value={this.state.firstName}
                                   name='firstName'
                                   id='firstName'
                                   onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className='col l6 m6 input-field'>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text"
                                   required
                                   value={this.state.lastName}
                                   name='lastName'
                                   id='lastName'
                                   onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className='col l12 m12 s12 input-field'>
                            <label htmlFor="Email">Email</label>
                            <input type="email"
                                   required
                                   value={this.state.email}
                                   name='email'
                                   id='email'
                                   onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className='col l12 m12 s12 input-field'>
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                   required
                                   value={this.state.password}
                                   name='password'
                                   id='password'
                                   onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className='col l12 m12 s12 center'>
                            <button type='submit' className='btn btn-large blue lighten-1 z-depth-2'>
                                SignUp{isLoaded ?
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
                            {authError ? <p>{ authError }</p>: null}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
       signUp: (newUser) => dispatch(signUp(newUser))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (SignUp);
