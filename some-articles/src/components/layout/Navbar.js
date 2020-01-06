import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props)=>{
    const { auth } = props
    console.log(auth, 'auth')
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">SomeArticles</Link>
                { links }
            </div>
        </nav>
    )
};
const mapStateToProps = (state) => {
    console.log(state, 'state in navbar');
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);
