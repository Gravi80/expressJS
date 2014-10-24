Setup
=====
There are two ways to setup Express. 
------------------------------------



1).The first one is by placing it in your package.json file and running npm install.

{
    "name": "MyWebSite",
    "description": "My website",
    "version": "0.0.1",
    "dependencies": {
        "express": "3.x"
    }
}
The framework's code will be placed in node_modules and you will be able to create an instance of it.

$ npm install




2). Just install Express globally with "npm install -g express".
By doing this, you now have a brand new CLI instrument. For example if you run:

"express --sessions --css less --hogan app"

Express will create an application skeleton with a few things already configured for you. Here are the usage options for the express(1) command:

Usage: express [options]
Options:
  -h, --help          output usage information
  -V, --version       output the version number
  -s, --sessions      add session support
  -e, --ejs           add ejs engine support (defaults to jade)
  -J, --jshtml        add jshtml engine support (defaults to jade)
  -H, --hogan         add hogan.js engine support
  -c, --css   add stylesheet  support (less|stylus) (defaults to plain css)
  -f, --force         force on non-empty directory






If you want to generate an application with EJS, Stylus, and session support you would simply execute:

$ express --sessions --css stylus --ejs myapp

create : myapp
create : myapp/package.json
create : myapp/app.js
create : myapp/public
create : myapp/public/javascripts
create : myapp/public/images
create : myapp/public/stylesheets
create : myapp/public/stylesheets/style.styl
create : myapp/routes
create : myapp/routes/index.js
create : myapp/views
create : myapp/views/index.ejs

install dependencies:
  $ cd myapp && npm install
  
run the app:
  $ node app  





Steps i followed
-----------------
1)."npm install -g express"     => If you install express globally with npm you'll have it available from anywhere on your machine.

2).export PATH=/usr/local/share/npm/bin:$PATH in ~/.zshrc

3).express --help

4).express -s demoApp

5).cd demoApp

6).npm install   => downloads all the dependencies provided in package.json , and then a node_modules folder will pop up.

7).node app      => starts the app


npm install -g nodemon

nodemon app.js => will automatically reflect ur changes


Configuration
--------------
site should be deployed to three different places - a local server, a staging server and a production server.

As you know, every node script is run as a console program. 
So, we can easily send command line arguments which will define the current environment. 

I wrapped that part in a separate module /config/index.js

read about modules in ModulesReadMe.txt


Now  add 

var config = require('./config')();

http.createServer(app).listen(config.port, function(){
    console.log('Express server listening on port ' + config.port);
});



8). node app.js prod 


Tests
=====	

npm install -g jasmine-node

create a tests directory which will hold our tests

The spec files must end with .spec.js, 
so the file should be called config.spec.js. 

jasmine-node --verbose ./tests => Run Tests
