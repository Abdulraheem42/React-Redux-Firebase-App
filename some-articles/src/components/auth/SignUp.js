import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = ({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });
    };


    render() {

        return (
            <div className='container'>
                <form action="" onSubmit={this.handleSubmit.bind(this)}  className='white'>
                    <h2 className="text-grey center">Sign Up</h2>
                    <div className='row'>
                        <div className='col l6 input-field'>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" value={this.state.firstName} name='firstName' id='firstName' onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className='col l6 input-field'>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" value={this.state.lastName} name='lastName' id='lastName' onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className='col l12 input-field'>
                            <label htmlFor="Email">Email</label>
                            <input type="email" value={this.state.email} name='email' id='email' onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className='col l12 input-field'>
                            <label htmlFor="password">Password</label>
                            <input type="password" value={this.state.password} name='password' id='password' onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className='col l12 center'>
                            <button type='submit' className='btn btn-large blue lighten-1 z-depth-2'>
                                SignUp
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
