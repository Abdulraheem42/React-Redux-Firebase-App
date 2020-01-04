import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = ()=>{
    return(

        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">SomeArticles</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
};
const mapStateToProps = (state) => {
    console.log(stat, 'state in navbar');
    return{

    }
}

export default connect(mapStateToProps())(Navbar);
