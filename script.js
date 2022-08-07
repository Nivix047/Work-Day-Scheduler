var currentDayEl = $("#currentDay");
var timeBlockEl = $("time-block");

// MM DD YY Display
currentDayEl.text(moment().format("LLLL"));

// Save Button
var saveBtn = $(".saveBtn");

saveBtn.on("click", function (event) {
  // function that receives textarea
  var descriptionValue = $(".description").val();
  localStorage.setItem("description-input", JSON.stringify(descriptionValue));
  console.log(descriptionValue);
  // if/else for colors

  //saves in local storage
});
