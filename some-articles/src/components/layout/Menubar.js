import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {Link, NavLink} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import M from 'materialize-css';

import {signOut} from "../../store/actions/authActions";

class Menubar extends Component{

    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    }

render(){

        const { auth, profile, signOut } = this.props
    const { initials } = profile;
    const fullName = profile.firstName + " " + profile.lastName;
    const links = auth.uid ? <SignedInLinks profile={ profile } /> : <SignedOutLinks />;
    return(
        <div>
            <div className='navbar-fixed'>
                <nav className=" grey darken-3 fixed">
                    <div className="nav-wrapper container">
                        <Link to="/" className="left brand-logo">SomeArticles</Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                        <ul className='right hide-on-med-and-down'>
                            <li>{ links }</li>
                        </ul>
                    </div>
                </nav>
            </div>
                <nav className='sidenav sidenav-close' id='mobile-demo'>
                    {auth.uid ?
                        <ul>
                            <li>
                                <div className="user-view">
                                    <div className="background">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWSaMbdWUwuxfepMUdBT9QehCknnmy8GYppD54sSFMuaTUh_SW" />
                                    </div>
                                    <div title={ fullName }><NavLink to='/' className='btn btn-floating light-blue'>{ initials }</NavLink></div>
                                    <a href="#name"><span className="white-text name">{fullName}</span></a>
                                    <a href="#email"><span className="white-text email">{auth.email}</span></a>
                                </div>
                            </li>
                            <li><NavLink to='/'><i className="large material-icons">home</i>
                                Home
                            </NavLink>
                            </li>
                            <li><NavLink to='/create'><i className="large material-icons">add</i>
                                New Article
                                </NavLink>
                            </li>
                            <li><NavLink to='/notifications'><i className="large material-icons">notifications</i>
                                Notifications
                            </NavLink>
                            </li>
                            <li><NavLink to=''><i className="large material-icons">settings</i>
                                Settings
                            </NavLink>
                            </li>
                            <li><NavLink to=''><i className="large material-icons">info</i>
                                About Us
                            </NavLink>
                            </li>
                            <li><NavLink to = '/' onClick={signOut}><i className="large material-icons">exit_to_app</i>
                                Log Out
                                </NavLink>
                            </li>
                        </ul>
                            :
                        <ul>
                            <li><NavLink to='/signup'><i className="large material-icons">person_add</i>
                                SignUp
                                </NavLink>
                            </li>
                            <li><NavLink to='/signin'><i className="large material-icons">person</i>
                                SignIn
                                </NavLink>
                            </li>
                            <li><NavLink to=''><i className="large material-icons">info</i>
                                About Us
                            </NavLink>
                            </li>
                        </ul>
                    }
                </nav>

        </div>

    )
}
}

const mapStateToProps = (state) => {
    console.log(state, 'state in navbar');
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        signOut: () => dispatch(signOut())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menubar);
