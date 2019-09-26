'use strict'

var mongoose = require('mongoose');
var app = require('./app')
var port = '3700';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Portafolio')
        .then(() =>{
            console.log("connection to data base successful!");
            
            // creation server
            app.listen(port, () =>{
                console.log("Server running success on localhost:3700")

            });
            
        })
        .catch(err => console.log(err));

