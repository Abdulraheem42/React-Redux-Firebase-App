import React from 'react';
import "materialize-css/dist/css/materialize.min.css"

const ProjectSummary = ({project}) =>{

    const splitArticle = project.content.split(' ');
        const sliceArticle = splitArticle.slice(0, 15);
        const firstTenWords = sliceArticle.join(' ');

    return(
        <div className="card">
            <div className="card-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWSaMbdWUwuxfepMUdBT9QehCknnmy8GYppD54sSFMuaTUh_SW" />
            </div>
            <div className="card-content">
                <span className="card-title text-darken-3">{project.title}</span>
                <p className='grey-text content'>{firstTenWords}<a href=""> Read More...</a></p>
            </div>
            <p className='grey-text card-action'>27 December, 4:20pm</p>
        </div>
    )
};

export default ProjectSummary;
