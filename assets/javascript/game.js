$(document).ready(function() {
  var entry = Math.floor(Math.random() * 43 + 25);
  $("#entryNumber").text(entry);
});
//entry is randomly generated
//entry should remain between 25 and 68
//entry appears as text in #entryNumber

//create variables the images that are random numbers

var ran1 = Math.floor(Math.random() * 13 + 1);
var ran2 = Math.floor(Math.random() * 13 + 1);
var ran3 = Math.floor(Math.random() * 13 + 1);
var ran4 = Math.floor(Math.random() * 13 + 1);
console.log(ran1);
console.log(ran2);
console.log(ran3);
console.log(ran4);

//set up variables for the images to be randomly generated between 1-14

//set the variables for the finalTotal, wins, and losses

var total = 0;
var wins = 0;
var losses = 0;
console.log(total);
console.log(wins);
console.log(losses);

//append the the variables wins and losses to the #numberWins and #numberLosses

$("#numberWins").text(wins);
$("#numberLosses").text(wins);
$("#finalTotal").text(total)

//set up function to add ran1-4 to the total
//total is added onto the DOM under #finalTotal
$('#afghan').on ('click', function(){
    total = total + ran1;
    console.log("the afghan hounds are here: " + ran1)
    $('#finalTotal').text(total);
    })
$('#saluki').on ('click', function(){
    total = total + ran2;
    console.log("the saluki's are here: " + ran2)
    $('#finalTotal').text(total);
    })
$('#sheltie').on ('click', function(){
    total = total + ran3;
    console.log("the shelties are here: " + ran3)
    $('#finalTotal').text(total);
    })
$('#crested').on ('click', function(){
    total = total + ran4;
    console.log("the cresteds are here: " + ran4)
    $('#finalTotal').text(total);
    })

//set up the conditions for win
function win(){
    if (total === entry);
        $('winLose').text("YOU WIN!");
        $('numberWins').text(wins++);
}