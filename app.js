/*jshint laxcomma:true*/
/**
 * Module dependencies.
 */

var express = require('express')
  , everyauth = require('everyauth')
  , Datastore = require('nedb')
  , users = new Datastore('databases/users.nedb')
  , tuts = new Datastore('databases/tutorials.nedb')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

users.loadDatabase();
tuts.loadDatabase();


// set up authentichaos
everyauth.password
  .getLoginPath('/login')
  .postLoginPath('/login')
  .loginView('login') // views/login.jade
  .authenticate(function(login, password) {
    // 
    var errs = [];

    if (!login) errs.push('No login name');
    if (!password) errs.push('No password entered');
    if (errs.length) return errs;

    var promise = this.Promise();
    users.find({username: login}, function (err, user) {
      if (err) {
        errs.push(err);
        return promise.fulfill(errs);
      }
      if (user.length == 0) {
        errs.push('No such user');
        return promise.fulfill(errs);
      }
      if (user[0].password !== password) {
        errs.push('Wrong password!');
        return promise.fulfill(errs);
      }
      promise.fulfill(user);
    });
    return promise;
  })
  .loginSuccessRedirect('/tutorials')

  .getRegisterPath('/register')
  .postRegisterPath('/register')
  .registerView('register') // views/register.jade
  .validateRegistration(function(nuu) {
    // lame validation here
    var errs = []; 
    if (nuu.login == "Username") 
      errs.push('Username can\'t be "Username" :\\');
    if (!/^[A-z0-9\-]+$/.test(nuu.login)) 
      errs.push('Username can\'t contain characters other than (Latin) letters, numbers and dashes');
    // the return value will be as 'errors' in register.jade

    return errs;
  })
  .registerUser(function(nuu) {
    // db/etc validation here
    var promise = this.Promise(), 
           errs = [];
    users.find({username: nuu.login}, function (err, user) {
      if (user.length > 0) {
        errs.push('Username is taken!');
        return promise.fulfill(errs);
      }
      users.insert({username: nuu.login, password: nuu.password}, function (err, newdoc) {
        if (err) {
          errs.push(err);
          return promise.fulfill(errs);
        }
        return promise.fulfill(newdoc[newdoc.length-1] || ['errrr']);
      });
      return promise.fulfill(errs);
    });
    
    // return a promise
    return promise;
  })
  .registerSuccessRedirect('/tutorials');
  


app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.cookieParser('the girl who waited'));
app.use(express.session());
app.use(everyauth.middleware(app));

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/lua', routes.lua);
app.get('/reference/lua', routes.referenceLua);
app.get('/reference', routes.reference);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
