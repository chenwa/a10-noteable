
/* Generates a random code every time the user presses "Generate Code"
For some reason, this doesn't work.*/

$('#codeGenerator').click(makeID);

function makeID(event) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  $('#crowdsourceCode').text(text);

}



/* Never used - didn't make a difference to modal not showing up, since I used
Warren's modal format (the ones like from note page) instead of the one there.


window.onload = function(){ 
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {

    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}; */