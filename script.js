$(document).ready(function() {

    // day,month and year
    const todayDate = moment().format('MMM Do, YYYY');
    $("#currentDay").html(todayDate);


    // saveBtn on click function
    $(".saveBtn").on("click", function() {
        console.log(this);
        const text = $(this).siblings(".description").val();
        const time = $(this).parent().attr("id")
            //save text inside of local storage
        localStorage.setItem(time, text);

    })

    function timeUpdater() {
        //number of hours 
        const timeNow = moment().hour();

        $(".time-block").each(function() {
            const timeBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log(timeBlock)
                //changing the background colors once time has moved to the next hour

            if (timeBlock < timeNow) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            } else if (timeBlock === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }


    //getItem from local storage for individual hours.
    $('#hour9 .description').val(localStorage.getItem("hour9"));
    $('#hour10 .description').val(localStorage.getItem("hour10"));
    $('#hour11 .description').val(localStorage.getItem("hour11"));
    $('#hour12 .description').val(localStorage.getItem("hour12"));
    $('#hour13 .description').val(localStorage.getItem("hour13"));
    $('#hour14 .description').val(localStorage.getItem("hour14"));
    $('#hour15 .description').val(localStorage.getItem("hour15"));
    $('#hour16 .description').val(localStorage.getItem("hour16"));
    $('#hour17 .description').val(localStorage.getItem("hour17"));


    timeUpdater();

})