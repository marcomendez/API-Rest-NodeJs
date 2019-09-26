'user strict'

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'I am Home!'
        });
    },

    test: function(req, res){
       return res.status(200).send({
            message : "I am the method or action test of the controller project"
        });
    }
};

module.exports = controller;