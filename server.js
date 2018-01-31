 var express = require('express');
 var bodyParser = require('body-parser');
 var passport = require('passport');
 var config = require('./server/config/config');

 // Express
 var app = express();
 app.use(bodyParser.urlencoded({ extended: true} ))
 app.use(bodyParser.json());

 // Passport 
 app.use(passport.initialize());
 require('./server/services/passport.js')(passport, config)

 // Routes
 var router = express.Router();
 app.use('/api', router);
 require('./server/controllers/auth.js')(router, passport);

// Start up
var port = config.port || 8090;
app.listen(port, () => {
  console.log(`within-my-macros api running on port ${port}...`);
});