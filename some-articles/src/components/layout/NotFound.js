import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import PageNotFound from '../../assets/404-error-page-found.jpg';


const NotFound = () => (
    <div className='center not_found'>
        <img src={PageNotFound} alt='Not Found' style={{display: 'block', margin: 'auto', position: 'relative' }} />
        <Link to="/" className='btn-large back_btn'>Return to Home Page</Link>
    </div>
);
export default NotFound;
