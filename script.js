var currentDayEl = $("#currentDay");
var timeBlockEl = $("time-block");

// MM DD YY Display
currentDayEl.text(moment().format("LLLL"));

// Save Button
var saveBtn = $(".saveBtn");

// How to make submit button independent from each event?
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    // function that receives textarea
    // Need a if / else statement that only does this under some conditions

    // if descrption content
    //saves in local storage
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);

    function hourUpdated() {
      //loop over time blocks
      var currentHour = moment().hours();
      $(".time-block").each(function () {
        //check if we have moved to the next hour
        var blockhour = parseInt($(this).attr("id").split("-")[1]);

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
  });
});
