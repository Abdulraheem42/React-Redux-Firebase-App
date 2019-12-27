import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const ProjectDetails = () =>{
    return(
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Project Title</span>
                    <p>After including the sidenav-trigger line into your navbar,
                        all you have to do now initialize the plugin. This example
                        below assumes you have not modified the classes in the
                        above example.
                    </p>
                </div>
                 <div className='card-action lighten-4 grey-text'>
                     <div>Posted by the SomeArticles</div>
                     <div>2nd December, 5:00pm</div>
                 </div>
            </div>
        </div>
    )
};

export default ProjectDetails;
