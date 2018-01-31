import React from 'react';
import GoogleLogin from './components/GoogleLogin'
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, loginFromStorage } from '../../modules/authentication';
import Storage from '../../services/storage';

import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.storage = new Storage()
    }

    handleLogin = (basicProfile, authResponse) => {
        const user = {
            googleId: basicProfile.getId(),
            name: basicProfile.getName(),
            email: basicProfile.getEmail()
        }

        this.props.login(user, authResponse)
    }

    handleLoginError = (error) => {
        // todo: add some real login error handling
        console.log(error)
    }

    render() {
        return (
            <div className="login-page">
                <div className="row">
                   <div className="col-xs-10 col-xs-offset-2">
                       <div className="login-container">
                        <h3>barebones</h3>
                        <p>
                            A barebones starter application with React client and
                            Express 4 server with built in Google authentication.
                        </p>
                        <div className="login-btn-container">
                            <GoogleLogin onLoginSuccess={this.handleLogin} onLoginError={this.handleLoginError} autoLogin={false} />
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    login,
    loginFromStorage
}, dispatch)

const mapStateToProps = state => ({
    authenticated: state.authentication.authenticated,
    isAuthenticating: state.authentication.isAuthenticating,
    authenticationError: state.authentication.authenticationError
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))