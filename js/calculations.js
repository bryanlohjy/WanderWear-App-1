

setInterval (function sumCLO(){
//Calculating CLO Values
var c_topCLO = document.getElementById('top-CLO').innerHTML;
var c_bottomCLO = document.getElementById('bottom-CLO').innerHTML;

var calc_topCLO = Number(c_topCLO.replace(/[^0-9\.]+/g,""));
var calc_bottomCLO = Number(c_bottomCLO.replace(/[^0-9\.]+/g,""));

var sum_CLO = calc_topCLO + calc_bottomCLO;
$('#sum-CLO').html("Sum CLO: " + sum_CLO);


//Calculating Comfort - inaccurate placeholder calculation
var c_temperature = document.getElementById('air-temperature').innerHTML;
var calc_temperature = Number(c_temperature.replace(/[^0-9\.]+/g,""));

var predicted_comfort = calc_temperature/(sum_CLO*15);

$('#predicted-comfort').html("Predicted Comfort: " + predicted_comfort);


if(predicted_comfort < 2) {                            
// $('.slide-outcome').css({'background-color':'#00cc00'});
$('#comfort-status').css({'background-color':'#00cc00'});
$('#comfort-status').html("You are good to go.");

}else{
// $('.slide-outcome').css({'background-color':'red'});
$('#comfort-status').css({'background-color':'red'});
$('#comfort-status').html("Try again.");
}       


},500);





