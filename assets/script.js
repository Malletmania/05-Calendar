//TODO add local storage for the text bar. How can you save it all at one time and put it in local storage.

var now = moment();
$("span").text(now.format('MMMM DD YYYY, h:mm:ss a'));
var fakeTime = "Wed Sep 29 2021" + now + "GMT-0500";

// var storage = document.getElementById('hourTime');
// var textArea = $("text")
// var savebutton = document.getElementById('saveBtn');

// savebutton.onabort('click', function() {
//     console.log($(this));
//     localStorage.setItem("textarea", textArea.val());
//     console.log("click")
// })

// function start();

localStorage.setItem = ["" , "" , "" , "" ,"" , "" ,"" , "" ,"" , "" ,"" , "" ,"" , "" ,"" , ""];

function compareTimesNine() {
    if (moment(now).isAfter(currentHour)){
        console.log("after!");
        five.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before");
        five.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        console.log("same")
        five.addClass("present time");
    }
}

function compareTimesTen() {
    if (moment(now).isAfter(currentHour)){
        console.log("after!");
        five.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before");
        five.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        console.log("same")
        five.addClass("present time");
    }
}

function compareTimesEleven() {
    if (moment(now).isAfter(currentHour)){
        console.log("after!");
        five.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before");
        five.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        console.log("same")
        five.addClass("present time");
    }
}

function compareTimesTwelve() {
    if (moment(now).isAfter(currentHour)){
        console.log("after!");
        five.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before");
        five.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        console.log("same")
        five.addClass("present time");
    }
}

function compareTimesOne() {
    if (moment(now).isAfter(currentHour)){
        console.log("after!");
        five.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before");
        five.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        console.log("same")
        five.addClass("present time");
    }
}

function compareTimesTwo() {
    if (moment(now).isAfter(currentHour)){
        console.log("after!");
        five.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before");
        five.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        console.log("same")
        five.addClass("present time");
    }
}

function compareTimesThree() {
    if (moment(now).isAfter(currentHour)){
        console.log("after!");
        five.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before");
        five.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        console.log("same")
        five.addClass("present time");
    }
}

function compareTimesFour() {
    if (moment(now).isAfter(currentHour)){
        console.log("after!");
        five.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before");
        five.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        console.log("same")
        five.addClass("present time");
    }
}

function compareTimesFive() {
    if (moment(now).isAfter(currentHour)){
        console.log("after!");
        five.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before");
        five.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        console.log("same")
        five.addClass("present time");
    }
}

function compareTimesSix() {
    if (moment(now).isAfter(currentHour)){
        console.log("after!");
        five.addClass("past");
    } else if (moment(now).isBefore(currentHour)) {
        console.log("before");
        five.addClass("future");
    } else if (moment(now).isSame(currentHour)) {
        console.log("same")
        five.addClass("present time");
    }
}
