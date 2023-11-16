var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');
var electionRouter=require('./routes/elections');
var Election = require("./models/election");

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await Election.deleteMany();

let instance1 = new
Election({year:2020, location:'City A', candidate:'Candidate A'});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{

console.error(err)
});

let instance2 = new
Election({year:2021, location:'City B', candidate:'Candidate B'});
instance2.save().then(doc=>{console.log("Second object saved")}).catch(err=>{

console.error(err)
});

let instance3 = new
Election({year:2022, location:'City C', candidate:'Candidate C'});
instance3.save().then(doc=>{
console.log("Third object saved")}
).catch(err=>{

console.error(err)
});
}

let reseed = false;
if (reseed) {recreateDB();}
var app = express();

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/election', electionRouter);
app.use('/resource', resourceRouter);
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

module.exports = app;