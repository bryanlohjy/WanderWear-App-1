var rootRef = new Firebase('https://wanderwear.firebaseio.com/');

//writing data

var usersRef = rootRef.child("users");

$( "#feedback-hot" ).click(function() {
	usersRef.child("user-1").child("feedback").push(-1)
	
});

$( "#feedback-good" ).click(function() {
	usersRef.child("user-1").child("feedback").push(0)
	
});

$( "#feedback-cold" ).click(function() {
	usersRef.child("user-1").child("feedback").push(1)
	
});

$( "#clear-bias" ).click(function() {
	usersRef.child("user-1").child("feedback").set(0)
	
});

usersRef.child("user-1").child("feedback").on('value', function(child_snapshot) {
	
	var bias_list = child_snapshot.val();

	var bias_array = $.map(bias_list, function(value, index) {
	    return [value];
	});


	console.log(bias_array);
	//regex to get value
	//find total number of objects
});




// var ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog/posts");
// // Retrieve new posts as they are added to our database
// ref.on("child_added", function(snapshot, prevChildKey) {
//   var newPost = snapshot.val();
//   console.log("Author: " + newPost.author);
//   console.log("Title: " + newPost.title);
//   console.log("Previous Post ID: " + prevChildKey);
// });



// $( "#feedback-good" ).click(function() {
//   alert( "Handler for .click() called." );
// });

// $( "#feedback-cold" ).click(function() {
//   alert( "Handler for .click() called." );
// });



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





