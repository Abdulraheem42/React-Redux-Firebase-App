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
        const { projects, auth, notifications } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />;

        return(
            <div className='container-fluid'>
                    <div className='row'>

                        <div className='col l9 container-fluid dashboard'>
                            <div className='row'>
                                <ProjectList projects={ projects } />
                            </div>
                        </div>
                        <div className='col l3 offset-ml'>
                            <Notification notifications={notifications} />
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
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
};


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc']},
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard);
