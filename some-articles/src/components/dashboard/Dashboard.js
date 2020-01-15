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
        }, 2000);
    }

    render(){
        const { isLoaded } = this.state
        const { projects, auth, notifications, spin, skyblue } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />;

        return(

            <div className='container-fluid'>
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
                    <ReactLoading type={spin} color='skyblue' height={300} width={200} />
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
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard);
