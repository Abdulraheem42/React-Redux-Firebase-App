import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) =>{
    return(
        <div className='project-list section'>
            {projects && projects.map(project => {
                return(
                    <div className='col xl3 l6 m6 s12' key={project.id}>
                        <Link to={ '/project/' + project.id }>
                            <ProjectSummary project={project} />
                        </Link>
                    </div>

                )
            })}
        </div>

    )
};

export default ProjectList;
