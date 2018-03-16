var data = require("../data.json");
//Give each note a unique ID
var uniqid = require('uniqid');

exports.addNote = function(req, res) {   
  
  var newNote = new Object();
  var date = new Date();
  var day = date.toLocaleDateString();
  var time = date.toLocaleTimeString();
  time = time.slice(0,4) + time.slice(7, time.length);

  newNote.name = req.query.name;
  newNote.date = day + " " + time;
  newNote.folder = req.params.folderID;
  newNote.noteID = uniqid();

  data.notes.push(newNote);

  console.log(data);

  //Redirects to folder
  res.redirect('/folder/' + req.params.folderID);
};
