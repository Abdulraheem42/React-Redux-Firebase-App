import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import ProjectSummary from './ProjectSummary';

const ProjectList = () =>{
    return(
        <div className='project-list section'>

        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />

        </div>
    )
};

export default ProjectList;
