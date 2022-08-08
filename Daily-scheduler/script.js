setInterval(() => {
    var now = moment()
    $('#current-time').text(now.format("dddd MMM Do "));
}, 1000);

// const rows = document.getElementsByClassName("row");
// let currentHour = parseInt(moment().format('H'));

// Array.from(rows).forEach(row => {
//     let rowIdString = row.id,
//         rowHour;
//     if (rowIdString) {
//         rowHour = parseInt(rowIdString);
//     }
//     if (rowHour) {
//         if (currentHour === rowHour) {
//             setColor(row, ".present");
//         } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
//             setColor(row, ".future");
//         } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)){
//             setColor(row, ".past");
//         } else {
//             setColor(row, "white");
//         }
//     }});
//     function setColor(element, color) {
//         element.style.backgroundColor = color;
//     };
// console.log(rows);

function everyHour() {
    var totalHour = moment().hour()
    $(".time-block").each(function() {
        var hour = parseInt($(this).attr("id"))

        if(hour < totalHour) {
            $(this).addClass("past");
        } else if(hour === totalHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
everyHour();

$(".container").click(function(event) {
    if(event.target.nodeName === 'I') {
        console.log(event)
        var input = event.target.dataset.input
        var inputValue = $("."+ input).val()
        localStorage.setItem(input, inputValue)
        console.log(inputValue)
    }
    
})

$(".8am").val(localStorage.getItem("8am"))
$(".9am").val(localStorage.getItem("9am"))
$(".10am").val(localStorage.getItem("10am"))
$(".11am").val(localStorage.getItem("11am"))
$(".12pm").val(localStorage.getItem("12pm"))
$(".1pm").val(localStorage.getItem("1pm"))
$(".2pm").val(localStorage.getItem("2pm"))
$(".3pm").val(localStorage.getItem("3pm"))
$(".4pm").val(localStorage.getItem("4pm"))
$(".5pm").val(localStorage.getItem("5pm"))
