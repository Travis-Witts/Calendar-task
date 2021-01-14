    // Setting the current day
    $("#currentDay").text(moment().format('LL'));
    // Turning the time into a string to be used later
    for (var i = 9; i < 18; i++) {
      var sectionTime = i + ":00  ";
      if (i < 10) {
        sectionTime = "  " + i + ":00  ";
      }
      // Creating a row for each time
      var timeDiv = $("<div>").addClass("row");
      timeDiv.append($("<div>").addClass("time-block hour"))
      $(timeDiv).text(sectionTime);
      var tense = $("<div>")
      // An if statement to check if it is before the current time and adding save button aswell
      if (moment({ hour:i+1, minute:0}).isBefore()) {
        tense.addClass("past tense");
        tense.text("Task");
        tense.attr("time", sectionTime);
        timeDiv.append(tense);
      }
      // Else checking if it is in the future
      else if (moment({ hour:i, minute:0}).isAfter()) {
        tense.addClass("future tense");
        tense.text("Task");
        tense.attr("time", i);
        timeDiv.append(tense);
      }
      // This else is designed to assign a class to a div if it is in the present
      else {
        tense.addClass("present tense");
        tense.text("Task");
        tense.attr("time", i);
        timeDiv.append(tense);
      }
      // Creating a save button for each
      var save = $("<button>").addClass("saveBtn");
      save.attr("save-time",i);
      save.text("Save");
      timeDiv.append(save);
      // Creating a text area for each of the divs
      var textArea = $("<textarea>")
      textArea.attr("text-num", i)
      textArea.addClass("text-area")
      var local = localStorage.getItem(i)
      if (local) {
        textArea.text(local)
      }
      tense.append(textArea)
      // Appending the row to the container
      $(".container").append(timeDiv);
    }
    // Creating a listener and a function for the save button
    $(".saveBtn").on("click", function(event) {
      event.preventDefault();
      var saveTime = $(this).attr("save-time");
      var textContent =  $(this).prev().find(".text-area").val()
      console.log(textContent)
      // Storing the text in local storage
      localStorage.setItem(saveTime, textContent)
    })