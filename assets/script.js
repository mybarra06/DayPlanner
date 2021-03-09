// Time taken from moment.js

// Var for current day
var currentDay = document.getElementById("#currentDay");

// var date
var date = document.getElementById("#date");

// local time and date set up
var date = (moment().format('dddd Do YYYY, h:mm a'));

//adds to page
document.getElementById("currentDay").innerHTML = date;

// 2 minute time
var timeUpdate = setInterval (date, 120000);

// Current time
var currentHour = moment().format("H");

// HTML hours 9-5p
$(".description").each(function(index) {
    // Finds hour in HTML but takes off "-" to link all times
    var hour = $(this).parent().attr('id').split("-")[1];
    // looking for previous hrs > what the current time
    if (parseInt(hour) > parseInt(currentHour) ){
        // Css element future
        $(this).addClass("future");
        
    } else if (parseInt(hour) === parseInt(currentHour) ) {
        // css color red
        $(this).addClass("present");
    } else {
        // past css color grey
        $(this).addClass("past");
    }
})


// Local storage 
$(".time-block").each(function() {
    // HTML ids
    const id = $(this).attr("id");

    // Pulls up local storage
    var storedDescription = localStorage.getItem(id);

    $(this).children("textarea").val(storedDescription);

})
// saves/logs on local storage
$(".saveBtn").on("save", function () {
    // Id save options different time slots
    var id = $(this).parent().attr("id");
    // input in text area
    var description = $(this).siblings("textarea").val();
    // key and value info in storage
    localStorage.setItem(id, description);
})