//TODO add local storage for the text bar. How can you save it all at one time and put it in local storage.
function setScheduleForDay(date, schedule) {
    localStorage.setItem(date.format("YYYY-DD-MM"), JSON.stringify(schedule))
    console.log(schedule)
}
function getScheduleForDay(date){
    
    const value = localStorage.getItem(date.format("YYYY-DD-MM"))
    if(value === null){
        return {};
    }
    return JSON.parse(value);
}
// var now = moment();
// var time = 9;
// $("span").text(now.format('MMMM DD YYYY, h:mm:ss a'));
// var fakeTime = "Wed Sep 29 2021" + now + "GMT-0500";
// time = moment(time).add(updateTime, 'h')


function checkTime(date, now = moment()) {
    if (moment(now).isAfter(date)){
        return ("past")
    } else if (moment(now).isBefore(date)) {
        return("future");
    } else if (moment(now).isSame(date, "hour")) {
        return ("present");
    }
}
$(document).ready(function(){
    $("#planner").on("submit", function(e){
        e.preventDefault()
    })
    $("#planner").on("click", ".saveBtn", function(e) {
        const root = $("[data-hour]");
        const hour = root.attr('data-hour');
        const schedule = getScheduleForDay(moment());
        schedule[hour] = root.find("textarea").val();
        setScheduleForDay(moment(), schedule);
        console.log($(this))
    })
    const schedule = getScheduleForDay(moment());
    for (const [key, value] of Object.entries(schedule)) {
        const root = $(`[data-hour="${key}"]`)
        root.find("textarea").val(value)
     }
    $("[data-hour]").each(function(){
        const date = moment(`${moment().format("YYYY-MM-DD")}T${$(this).attr('data-hour')}`);

        $(this).addClass(checkTime(date, moment("2021-11-10T10:00:00")))
    })
    $("#currentDay").text(moment().format("LL"))
})

