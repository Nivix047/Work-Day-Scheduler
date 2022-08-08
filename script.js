var currentDayEl = $("#currentDay");
var timeBlockEl = $(".time-block");

console.log(timeBlockEl);
// MM DD YY Display
currentDayEl.text(moment().format("LLLL"));

// Save Button
var saveBtn = $(".saveBtn");

// How to make submit button independent from each event?
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    // Value from textarea
    var value = $(this).siblings(".description").val();
    console.log(value);
    var time = $(this).parent().attr("id");
    console.log(time);

    //saves in local storage
    localStorage.setItem(time, value);
  });
});

// var savedDisplay = localStorage.getItem("hour-9");
// console.log(savedDisplay);

function hourUpdated() {
  //loop over time blocks
  var currentHour = moment().hours();
  $(timeBlockEl).each(function () {
    //check if we have moved to the next hour
    // Splits to hour, 9. The [1] is 9
    var blockhour = parseInt($(this).attr("id").split("-")[1]); // hour-9: [hour, 9] [1,2,3,4,5]
    console.log(this);
    console.log(blockhour);
    console.log(currentHour);

    //Loads the saved data from local storage to the descrption text content
    var hourID = $(this).attr("id");
    console.log(hourID);
    var savedDisplay = localStorage.getItem(hourID);
    console.log(savedDisplay);
    $(this).children(".description").text(savedDisplay);

    //Color dispalys
    if (blockhour < currentHour) {
      $(this).addClass("past");
    } else if (blockhour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}
hourUpdated();
