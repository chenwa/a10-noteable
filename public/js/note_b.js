//Hey guys remember to comment your code and write your name on functions

'use strict';

//Elements for Camera
var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

//Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})



//Functions:


//Request Camera Permission
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    });
}


//Take Photo
$("#snap").click(function() {
  var videoHeight = $("#video").height();
  var videoWidth = $("#video").width();
  canvas.height = videoHeight;
  canvas.width = videoWidth;

  context.drawImage(video, 0, 0, videoWidth, videoHeight);

  //Change buttons
  $("#video").hide();
  $("#snap").hide();
  $("#canvas").show();
  $("#retake").show();
});

//Retake Photo
$("#retake").click(function() {
  //Change buttons
  $("#video").show();
  $("#snap").show();
  $("#canvas").hide();
  $("#retake").hide();
});

//Placeholder Save Photo Function
$("#savePhoto").click(function() {
  //Change buttons
  $("#video").show();
  $("#snap").show();
  $("#canvas").hide();
  $("#retake").hide();
});

$("#recordButton").click(function() {
  //Change buttons
  $("#recordButton2").show();
  $("#recordButton").hide();
});

$("#recordButton2").click(function() {
  //Change buttons
  $("#recordButton2").hide();
  $("#recordButton").show();
});

$("#muteButton").click(function() {
  //Change buttons
  $("#unmuteButton").show();
  $("#muteButton").hide();
});

$("#unmuteButton").click(function() {
  //Change buttons
  $("#unmuteButton").hide();
  $("#muteButton").show();
});

$("#roundAudio").click(function() {
  //Change buttons
  $("#roundAudio2").show();
  $("#roundAudio").hide();
});

$("#roundAudio2").click(function() {
  //Change buttons
  $("#roundAudio").show();
  $("#roundAudio2").hide();
});

//Done button pressed
function doneFunction(){

  $("#muteButton").hide();
  $("#unmuteButton").hide();
  $("#recording_btn").hide();
  $("#recording_btn2").hide();
  $("#doneButton").hide();
  $(".tab").show();

  };

//After all the buttons are gone, show the tab
function openTab(evt, twoContent) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  document.getElementById(twoContent).style.display = "block";
  evt.currentTarget.className += " active";
  document.getElementById("defaultOpen");
};



//Sample Function
function initializePage(){
	console.log("Javascript connected!");
  $("#recordButton2").hide();
  $("#roundAudio2").hide();
  $(".tab").hide();
  $("#unmuteButton").hide();

  $(".book_mark").click(bookmark_btn);
  $(".pics").click(pics_btn);
}

//get event and send it to Google Analytics
function bookmark_btn(e) {
  e.preventDefault();
  console.log('button clicked');
  ga('create', 'UA-114655521-2', 'auto');
  ga("send", "event", "Bookmark_B", "click");
}

function pics_btn(e) {
  e.preventDefault();
  console.log('button clicked');
  ga('create', 'UA-114655521-2', 'auto');
  ga("send", "event", "Pictures_B", "click");
}
