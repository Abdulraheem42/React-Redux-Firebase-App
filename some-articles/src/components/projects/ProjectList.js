import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) =>{
    return(
        <div className='project-list section'>

            {projects.map(project => {
                return(
                    <ProjectSummary project={project} key={project.id}/>
                )
            })}

        </div>
    )
};

export default ProjectList;
