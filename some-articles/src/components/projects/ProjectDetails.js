import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { SignIn } from '../auth/SignIn';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) =>{
    const { project, auth } = props;
    const id = props.match.params.id;

    if(!auth.uid) return <Redirect to='/signin' />;

if(project){
return(
    <div className='container author_detail section project-details'>
        <div className='card z-depth-2'>
            <div className='card-content'>
                <span className='card-title '>{project.title}</span>
                <p>{project.content}</p>
            </div>
            <div className='card-action lighten-4 grey-text'>
                <div>Posted By: {project.authorFirstName} {project.authorLastName}</div>
                <div>{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
        </div>
    </div>
)
}else{
    return(
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    )
}
};

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;

    return{
        project: project,
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
) (ProjectDetails);
