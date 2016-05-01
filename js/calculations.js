//Calculating CLO Values

setInterval (function sumCLO(){
var c_topCLO = document.getElementById('top-CLO').innerHTML;
var c_bottomCLO = document.getElementById('bottom-CLO').innerHTML;

var calc_topCLO = Number(c_topCLO.replace(/[^0-9\.]+/g,""));
var calc_bottomCLO = Number(c_bottomCLO.replace(/[^0-9\.]+/g,""));

var sum_CLO = calc_topCLO + calc_bottomCLO;
$('#sum-CLO').html("Sum CLO: " + sum_CLO);
},500);

