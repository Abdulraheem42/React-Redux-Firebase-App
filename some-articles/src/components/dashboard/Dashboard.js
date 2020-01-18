import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Notification from './Notification'
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Footer from '../layout/Footer';
import ReactLoading from 'react-loading';
import M from 'materialize-css'

class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            isLoaded: false
        })
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 3000);
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {duration: 200,
            fullWidth: true,
            indicators: true});
    }

    render(){
        const { isLoaded } = this.state
        const { projects, auth, notifications, cubes } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />;

        return(

            <div className='container-fluid'>
                <div className="carousel carousel-slider center">
                    <div className="carousel-fixed-item center">
                        <a className="btn waves-effect white grey-text darken-text-2">button</a>
                    </div>
                    <div className="carousel-item red white-text" href="#one!">
                        <h2>First Panel</h2>
                        <p className="white-text">This is your first panel</p>
                    </div>
                    <div className="carousel-item amber white-text" href="#two!">
                        <h2>Second Panel</h2>
                        <p className="white-text">This is your second panel</p>
                    </div>
                    <div className="carousel-item green white-text" href="#three!">
                        <h2>Third Panel</h2>
                        <p className="white-text">This is your third panel</p>
                    </div>
                    <div className="carousel-item blue white-text" href="#four!">
                        <h2>Fourth Panel</h2>
                        <p className="white-text">This is your fourth panel</p>
                    </div>
                </div>
                <h1 className='center'>Articles</h1>
                {isLoaded ?
                    <div className='row'>
                        <div className='col l9 container-fluid dashboard'>
                            <div className='row'>
                                <ProjectList projects={ projects } />
                            </div>
                        </div>

                        <div className='col l3 offset-ml'>
                            <Notification notifications={notifications} />
                        </div>
                    </div> :
                   <div className='container loading'>
                       <ReactLoading type={cubes} color='skyblue' height={600} width={200} />
                   </div>
                    }
                    <Footer />
            </div>


        )
    }
}
const mapStateToProps = (state) => {
    console.log(state, 'state');
    return{
        projects:state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
};


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc']},
        { collection: 'notifications', limit: 5, orderBy: ['time', 'desc']}
    ])
)(Dashboard);
