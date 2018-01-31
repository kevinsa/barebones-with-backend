module.exports = (router, passport) => {

  router.post('/login', (req, res) => {

    passport.authenticate('bearer', { session: false }, (err, user, info) => {
      if(user) {
        if(user.id === null) {
          /*
            We received an google authenticated user who doensnt have an
            appication specific profile.  Create the user profile record
            and return user profile in response
            
            TODO: create user profile here....
          */
          res.status(200).send(user)
        }
        else {
          /*
            We received a google authenticated user that has an exising application
            specific user profile.  No need to do much here since so just retrurn 
            the user profile in the response
          */
          res.status(200).send(user)
        }
      }
      else {
        res.status(401).send({ message: 'Unauthorized' })
      }

    })(req, res)
  })
}

