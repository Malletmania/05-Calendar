//TODO add local storage for the text bar. How can you save it all at one time and put it in local storage.
eventContent.setItem("eventContent", "");
document.getElementById("result").innerHTML = setItem.getItem("eventContent");

var storage = document.getElementById('.storage');
var textArea = document.getElementById('text');
var savebutton = document.getElementById('.button');


function start();


// start/open pages
// current day displayed in header
// set up time blocks
// color quordinate the time collumn, text collum, and save button. They all have to have the same this
// save text from block and save in local storage. Set up local storage
// referance 13-ins_Bootstrap-Layout