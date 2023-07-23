// Create web server
// Create web server
var express = require('express');
var app = express();
var port = 8080;

// Import modules
var path = require('path');
var bodyParser = require('body-parser');

// Import routes
var index = require('./routes/index');
var comments = require('./routes/comments');
var skills = require('./routes/skills');
var member = require('./routes/member');
var projects = require('./routes/projects');

// Set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.use('/', index);
app.use('/comments', comments);
app.use('/skills', skills);
app.use('/member', member);
app.use('/projects', projects);

// Listen on port 8080
app.listen(port, function() {
    console.log('Server started on port ' + port);
});