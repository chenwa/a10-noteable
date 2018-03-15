var data = require("../data.json");
var _ = require('underscore');

exports.deleteFolder = function(req, res){
  //Delete Folder
  for(var i = 0; i < _.size(data.folders); i++){
    if(data.folders[i].folderID == req.params.folderID){
      data.folders.splice(i,1);
      break;
    }
  }    
  res.redirect('/index');      
};

exports.editFolder = function(req, res){   
  //Change Folder Name
  if(req.query.newFolderName != (null || '' || "")){
    for(var i = 0; i < _.size(data.folders); i++){
      if(data.folders[i].folderID == req.params.folderID){
        data.folders[i].name = req.query.newFolderName;
        break;
      }
    }
  }

  console.log(data);

  res.redirect('/folder/' + req.params.folderID);
};

exports.deleteNote = function(req, res){   
  //Delete a note
  for(var i = 0; i < _.size(data.notes); i++){
    if(data.notes[i].noteID == req.params.noteID){
      data.notes.splice(i,1);
      break;
    }
  }
  

  console.log(data);

  res.redirect('/folder/' + req.params.folderID);
};
