'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    descriptio:String,
    category:String,
    year:Number,
    langs: [String]
});

module.exports = mongoose.model('Project', ProjectSchema);