$(document).ready(function() {

    // day,month and year
    const todayDate = moment().format('dddd-MM-YYYY');
    $("#currentDay").html(todayDate);


    // saveBtn on click function
    $(".saveBtn").on("click", function() {

        const text = $(this).siblings(".description").val();
        const time = $(this).parent().attr("id")
            //save text inside of local storage
        localStorage.setItem(time, text);

    })

    function timeUpdater() {
        const timeNow = moment().hour();

        $(".time-block").each(function() {
            const timeBlock = parseInt($(this).attr("id").split("hour")[1]);

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
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }


    //local storage 
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