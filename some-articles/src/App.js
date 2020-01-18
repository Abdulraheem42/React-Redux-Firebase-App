import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Menubar from './components/layout/Menubar'
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import NoteFound from './components/layout/NotFound';
import Notification from './components/dashboard/Notification';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Menubar />
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/project/:id' component={ProjectDetails} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/create' component={CreateProject} />
                    <Route path='/notifications' component={Notification} />
                    <Route path='*' component={NoteFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
