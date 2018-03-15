var data = require("../data.json");
//Give each note a unique ID
var uniqid = require('uniqid');

exports.addNote = function(req, res) {   
  
  var newNote = new Object();
  var date = new Date();

  newNote.name = req.query.name;
  newNote.date = "placeholder";
  newNote.folder = req.params.folderID;
  newNote.noteID = uniqid();

  data.notes.push(newNote);

  console.log(data);

  //Redirects to folder
  res.redirect('/folder/' + req.params.folderID);
};
