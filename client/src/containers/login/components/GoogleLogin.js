import React from 'react'
import '../Login.css'

class GoogleLogin extends React.Component {
  componentDidMount() {
    (function(callback) {
      var e = document.createElement('script')
      e.type = 'text/javascript'
      e.async = true
      e.src = 'https://apis.google.com/js/client:platform.js?onload=gPOnLoad'
      e.onload = callback
      var t = document.getElementsByTagName('script')[0]
      t.parentNode.insertBefore(e, t)
    })(() => {
      //initialize the auth objects after script loads
      let config = {
        client_id: '292516697509-dr7pr3l2278a391k3m8klkjefll6t1qm.apps.googleusercontent.com',
        cookie_policy: 'single_host_origin',
        fetch_basic_profile: true,
      }

      //check for an auth instance and initialize if not present
      window.gapi.load('auth2', () => {
        if(!window.gapi.auth2.getAuthInstance()) {
          window.gapi.auth2.init(config).then((res) => {
            if(this.props.autoLogin) {
              if(res.isSignedIn.get()) {
                this.handleSignInSuccess(res.currentUser.get())
              }
            }
          }, (error) => {
            this.handleSignInError(error)
          })
        }
      })
    });
  }

  signIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signIn().then((res) => this.handleSignInSuccess(res), err => this.handleSignInError(err))
  }

  handleSignInSuccess = (res) => {
    const authResponse = res.getAuthResponse()
    const basicProfile = res.getBasicProfile()

    this.props.onLoginSuccess(basicProfile, authResponse)
  }

  handleSignInError = (err) => {
    this.props.onLoginError(err)
  }

  render() {
    return (
      <button className="loginBtn loginBtn--google" onClick={() => this.signIn() }>
        Login with Google
      </button>
    )
  }
}

export default GoogleLogin
