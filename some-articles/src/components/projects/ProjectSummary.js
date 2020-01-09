import React from 'react';
import "materialize-css/dist/css/materialize.min.css"
import moment  from 'moment';

const ProjectSummary = ({project}) =>{
    const { authorFirstName, authorLastName } = project
    const splitArticle = project.content.split(' ');
        const sliceArticle = splitArticle.slice(0, 12);
        const firstTenWords = sliceArticle.join(' ');

    return(
        <div className="card">
            <div className="card-image">
                <img alt="Oops!" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWSaMbdWUwuxfepMUdBT9QehCknnmy8GYppD54sSFMuaTUh_SW'/>
            </div>
            <div className="card-content black-text">
                <span className="card-title">{project.title}</span>
                <p className='grey-text content'>{firstTenWords}<span className='blue-text'> Read More...</span></p>
            </div>
            <div className='grey-text card-action'>
                <span>Post By: { authorFirstName } { authorLastName }</span><br/>
                <span className='grey-text'>{moment(project.createdAt.toDate()).calendar()}</span>
            </div>

        </div>
    )
};

export default ProjectSummary;
