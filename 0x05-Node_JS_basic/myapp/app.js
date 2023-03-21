var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// GET request
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// POST request
app.post('/', (res, req) => {
    res.send('Got a POST request')
});

// PUT request
app.put('/user', (res, res) => {
    res.send('Got a PUT request as /user')
});

// DELETE request
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
});

// .all(), used to load middleware functions at a path for all HTTP request methods.
app.all('/secret', (req, res, next) => {
    console.log('Accessing the secrete section...')
    next() // pass control to the next section
});

// GET book
// path string for requests at “/data/$book”, would be “/data/([\$])book”.
app.get('/data/([\$])book', (req, res) => {
    res.send('request for book made')
});

// Request params

// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
});



module.exports = app;
