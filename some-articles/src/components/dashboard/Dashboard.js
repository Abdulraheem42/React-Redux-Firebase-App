import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Notification from './Notification'
import ProjectList from '../projects/ProjectList';
import SignIn from '../auth/SignIn';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component{
    render(){
        const { projects, auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />;

        return(
            <div>
                <div className='container dashboard'>
                <div className='row'>
                        <ProjectList projects={ projects } />


                    {/*<div className='col s12 l2 offset-ml'>*/}
                    {/*    <Notification />*/}
                    {/*</div>*/}
                </div>

            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state, 'state');
    return{
        projects:state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
};


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);
