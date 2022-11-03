var momentsBlock = moment().format("H");

// This function prevents any jQuery code from running until the html document is finished loading.  
$(document).ready(function() {

  // This function shows day/date/time with seconds changing using moments.js. Time displays in <p id="currentDay">.
  function clock() {
      var changingTime = moment().format('MMMM Do YYYY, h:mm:ss a');
      $('#currentDay').html(changingTime);
    }
    setInterval(clock, 1000);
  });

  // This will loop through my time blocks.
  $(".time-block").each(function() {
    /*console.log(this.id);  If I were working as a developer I would probably delete my console.logs once I was done 
    with them, but since this is homework I will leave them so graders can see where/why I used them.*/

    var currentHourBlock = parseInt($(this).attr("hour"))
    //console.log("hour:", currentHourBlock); 

      //Saves to text area after page is refreshed. 
       var storedText = localStorage.getItem(currentHourBlock) // Retrieve
        console.log(storedText)
        $(this).children(".description").val(storedText);
     
    //Conditional statement below changes classes on textarea depending on current time.
    if (momentsBlock > currentHourBlock) { 
      $(this).addClass("past");
      } else if (momentsBlock == currentHourBlock) {
      $(this).addClass("present");
      } else if (momentsBlock < currentHourBlock) {
      $(this).addClass("future");
    };
  })
    //This conditional statement is necessary so that I didn't have to convert clock/timeblocks to military time. 
    if (momentsBlock >= 1 && momentsBlock <= 5) {
      momentsBlock += 12; 
    }
    //console.log(momentsBlock, currentHourBlock);
    
    // This function saves text area info to local storage.
      $(".saveBtn").click(function () {
        var saveText = $(this).siblings(".description").val();
        //This was used as a test when created save function: alert(saveText);
        var hourClass = $(this).parent().attr("hour");
        localStorage.setItem(hourClass, saveText);
      });
      
  ;

  