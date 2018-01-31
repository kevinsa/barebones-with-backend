import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import requireAuth from '../components/auth/RequireAuth'
import Home from './home/Home';
import About from './about/About';
import Login from './login/Login';
import Logout from './logout/Logout';
import Profile from './profile/Profile';

const Main = (props) => (
    <div className="container">
        <Switch>
            <Route exact path='/' component={requireAuth(Home)} />
            <Route exact path='/about' component={requireAuth(About)} />
            <Route exact path='/profile' component={requireAuth(Profile)} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/logout' component={Logout} />
        </Switch>
    </div>
);

export default withRouter(Main)
