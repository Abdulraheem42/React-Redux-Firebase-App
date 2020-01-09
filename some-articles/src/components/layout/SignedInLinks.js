import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props)=>{
        const { profile } = props;
        const { initials } = profile;
        const fullName = profile.firstName + " " + profile.lastName;
    return(
        <ul className="right">
            <li><NavLink to='/create'>New Article</NavLink></li>
            <li><NavLink to='/'><span onClick={props.signOut}>Log Out</span></NavLink></li>
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
