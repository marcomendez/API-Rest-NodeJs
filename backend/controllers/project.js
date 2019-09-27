'user strict'

var Project = require('../models/project')

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
    },

    saveProject: function(req, res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            if(err) return res.status(500).send({message: "Error to save."});

            if(!projectStored) return res.status(404).send({message: "Project was not saved."});

            return res.status(200).send({project:projectStored});
        });
    },

    getProject:function(req, res){
        var projectId = req.params.id;

        if(projectId == null)return res.status(404).send({message:"The project Id was not found."});

        Project.findById(projectId, (err, project) => {
            
            if(err) return res.status(500).send({message : "error to get project."});
            
            if(!project) return res.status(404).send({message:"The project Id was not found."});

            return res.status(200).send({project});
        });
    },
    getProjects:function(req,res){
        Project.find({}).sort('year').exec((err, projects) =>{
            if(err) return res.status(500).send({message : "error to get projects."});
            
            if(!projects) return res.status(404).send({message:"The projects was not found."});

            return res.status(200).send({projects});
        });
    },
    updateProject:function(req,res){
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update,{new:true} ,(err, projectUpdated) => {

            if(err) return res.status(500).send({message : "error to update project."});
            
            if(!projectUpdated) return res.status(404).send({message:"The project was not found."});

            return res.status(200).send({
                project: projectUpdated
            });
        });
    },  
    deleteProject:function(req,res){
        var projectId = req.params.id;

        Project.findByIdAndDelete(projectId, (err, projectDeteled)=>{
            if(err) return res.status(500).send({message : "error to Delete project."});
            
            if(! projectDeteled) return res.status(404).send({message:"The project was not found."});

            return res.status(200).send({
                project:  projectDeteled
            });
        });
    },

    uploadImage: function(req,res){
        var projectId = res.params.id;
        var fileName = 'None...';

        if(req.files){
            return res.status(200).send({
                file: req.files
            });
        }else{
            return res.status(200).send({
                message: fileName
            });
        }
    }
};

module.exports = controller;