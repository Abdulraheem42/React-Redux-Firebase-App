import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) =>{
    const { project } = props;
    const id = props.match.params.id;
if(project){
return(
    <div className='container section project-details'>
        <div className='card z-depth-2'>
            <div className='card-content'>
                <span className='card-title '>{project.title}</span>
                <p>{project.content}</p>
            </div>
            <div className='card-action lighten-4 grey-text'>
                <div>{project.authorFirstName} {project.authorLastName}</div>
                <div>2nd December, 5:00pm</div>
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

const mapStateToProps = (state, Props) => {
    const id = Props.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;

    return{
        project: project
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
) (ProjectDetails);
