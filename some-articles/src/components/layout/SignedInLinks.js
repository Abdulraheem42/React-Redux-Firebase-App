import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props)=>{
        const { profile } = props;
        const { initials } = profile;
        const fullName = profile.firstName + " " + profile.lastName;
    return(
        <ul className="black-text darken-2">
            <li><NavLink to='/create'>New Article</NavLink></li>
            <li><NavLink to='/' onClick={props.signOut}>Log Out</NavLink></li>
            <li title={ fullName }><NavLink to='/' className='btn btn-floating light-blue'>{ initials }</NavLink></li>
        </ul>
    )
};

const mapDispatchToProps = (dispatch) =>{
return{
    signOut: () => dispatch(signOut())
}
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
