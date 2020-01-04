import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Notification from './Notification'
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component{
    render(){
        const { projects } = this.props;

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
        projects:state.firestore.ordered.projects
    }
};


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);
