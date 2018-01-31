var axios = require('axios')
var BearerStrategy = require('passport-http-bearer').Strategy;

module.exports = (passport, config) => {
  passport.use(new BearerStrategy(
    (token, done) => {
        axios.get(config.tokenValidationUrl + token).then(res => {
          /*
            Congrats, we have a valid Google id_token in the authorization header

            We can query app storage here for a user profile with a matching
            googleId and forward that user profile object over to any routes
            by passing the user profile object in done() callback

            If we don't have a user profile with a matching Google Id, we can forward
            a user profile object with a null applicaiton identifier.  The route
            receiving a user profile with a null applicaiton identifier can decide
            to service the request using the Goggle Id or enforce the creation of 
            a profile.

            Note: res.data.sub contains the Google User Identifier

            for example purposes, we create a dummy user object based on the response from
            token validation and send over to our routes... this is the scenario in
            which we don't have a user profile matching the Google Id associate with
            the token.
          */
          const { sub, name, email } = res.data;
          const user = {
            googleId: sub,
            id: null,
            name,
            email
          }
          return done(null, user);

        }).catch(err => {
          // invalid token, pass on error to protected route
          return done(err)

        })
    }
  )); // end passport.use
}

