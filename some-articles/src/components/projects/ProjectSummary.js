import React from 'react';

const ProjectSummary = ({project}) =>{
    return(
        <div className='card z-depth-1 project-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>{project.title}</span>
                <p>{project.content}</p>
                <p className='grey-text'>27 December, 4:20pm</p>
            </div>
        </div>
    )
};

export default ProjectSummary;
