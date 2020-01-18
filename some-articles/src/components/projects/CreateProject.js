import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import { connect } from "react-redux";
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
    constructor(props){
        super(props);
        this.state = ({
            title: '',
            content: '',
            // image: [],
            // url: ''
        })
    }

    handleChange = (e)=>{
        this.setState({
            // image: e.target.files,
            [e.target.name]: e.target.value
        })
        console.log(this.state, 'this.state')
    };

    handleSubmit = (e)=>{
        e.preventDefault();
        // const { image } = this.state;
        // const imageFile = image[0].name
        // console.log(image[0].name, 'image in submit')
        this.props.createProject(this.state);
        this.props.history.push('/');
        this.setState({
            title: '',
            content: '',
            // image: ''
        });
    };

    render() {
        console.log(this.state, 'this.state')
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />;

        return (
            <div className='container'>
                <form className='white' action="" onSubmit={this.handleSubmit.bind(this)}>
                <h2 className="text-grey center">Write your Article</h2>
                <div className='row'>
                    <div className='col l12 s12 input-field'>
                        <label htmlFor="title">Title</label>
                        <input type="text"
                               required
                               value={this.state.title}
                               id='title'
                               name='title'
                               onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className='col l12 s12 input-field'>
                        <label htmlFor="content">Content</label>
                        <input type="text"
                               required
                               value={this.state.content}
                               id='content'
                               name='content'
                               onChange={this.handleChange.bind(this)} />
                    </div>
                    {/*<div className='col l12 s12 input-field'>*/}
                    {/*    /!*<label htmlFor="content">Upload Image</label>*!/*/}
                    {/*    <input type="file"*/}
                    {/*           required*/}
                    {/*           // value={this.state.image}*/}
                    {/*           // id='image'*/}
                    {/*           // name='image'*/}
                    {/*           onChange={this.handleChange.bind(this)} />*/}
                    {/*</div>*/}
                    <div className='col l12 s12 input-field center'>
                        <button type='submit' className='btn btn-large blue z-depth-2'>Submit</button>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
};

const mapDispatchToProps =(dispatch)=> {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
