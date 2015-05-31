//scripts for handling submission/acquisition of reviews to/from the database

var ratings = [];
var reviews = [];

// function sendRatingsRequest(hall, meal){


// 	request = new XMLHttpRequest();
// 	url = "http://stark-garden-5420.herokuapp.com/ratings.json"; //web app for getting menu item reviews

// 	//meal = $('.meal_button').text;
// 	//loc = $('.location_button').text;

// 	url += "?loc=" + hall + "&meal=" + meal; 
// 	request.open("GET", url, true);

// 	//Send request w/ proper header info 
// 	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

// 	request.onreadystatechange = parseRatings;

// 	request.send();

// 	console.log("ratings request sent");
// }

/* Parse menu data and populate menu */

function parseRatings(){
	//console.log("parsing the acquired json...");
	console.log(request.readyState, request.status);
	//Only parse/edit text once XMLrequest is complete! 
	if (request.readyState == 4 && request.status == 200) {
		ratings = [];
		console.log("parsing the acquired json...");
		console.log(request.responseText);
		ratings = JSON.parse(request.responseText);
		console.log(ratings);

		result = 0.0;

		console.log("making modal rating now");

		food = $('#myModalLabel').text();
		for (i = 0; i < ratings.length; i++){
			console.log(ratings[i]);
			console.log(food);
			if (food == ratings[i]["fooditem"]){
				result = ratings[i]["stars"];
				break;
			}
		}
		result = Math.floor(result * 100) / 100;
		$('#input-id').rating('update', result);
		//console.log($('#input-id').rating());
		console.log(result);

		//prepModalForRating();

		sendReviewsRequest();
	}	
	
}

function prepModalForRating(){
	$('#input-id').on('rating.change', function(event, value, caption){
		console.log("rating value: " + value.toString());

		//meal = $('.meal_button').text();
		//loc = $('.location_button').text();
		food = $('#myModalLabel').text();

		parameters = "fooditem=" + food + "&stars=" + value;

		console.log("parameters to post: " + parameters);

		request = new XMLHttpRequest();
		url = "http://stark-garden-5420.herokuapp.com/sendRating";
		request.open("POST", url, true);

		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		//request.setRequestHeader("Content-length", parameters.length);
		//request.setRequestHeader("Connection", "close");

		request.send(parameters);
	});
}

function updateModalRating(hall, meal){
	request = new XMLHttpRequest();
	url = "http://stark-garden-5420.herokuapp.com/ratings.json"; //web app for getting menu item reviews

	//meal = $('.meal_button').text;
	//loc = $('.location_button').text;

	food = $('#myModalLabel').text();

	url += "?fooditem=" + food; 
	request.open("GET", url, true);

	//Send request w/ proper header info 
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	request.onreadystatechange = parseRatings;

	request.send();

	console.log("ratings request sent");

}


function sendReviewsRequest(){
	request = new XMLHttpRequest();
	reviews = [];
	url = "http://stark-garden-5420.herokuapp.com/reviews.json"; //web app for getting menu item reviews

	//meal = $('.meal_button').text();
	//loc = $('.location_button').text();

	food = $('#myModalLabel').text();

	url += "?fooditem=" + food; 
	request.open("GET", url, true);

	console.log("sending get request to: " + url);

	//Send request w/ proper header info 
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	request.onreadystatechange = parseReviews;

	request.send();
}

	/* Parse menu data and populate menu */

function parseReviews(){
	//Only parse/edit text once XMLrequest is complete! 
	if (request.readyState == 4 && request.status == 200) {
		console.log("about to parse the reviews response");
		reviews = JSON.parse(request.responseText);
		console.log("reviews", reviews);
		hdr = "<h2>Reviews:</h2>";
		result = "";
		console.log("about to fill in reviews", reviews.length);
		for (i = reviews.length - 1; i > -1; i--){
			result+= "<p>" + (i+1) + ") " + reviews[i]["user"] +  ': "' + reviews[i]["rev"] + '"</p>';
		}
		if (result == ""){
			result = "<p>Be the first person to review this item! Please fill out the form below!</p>";
		}
		hdr += result;
		$(".foodreviews").html(hdr);
	}
}		

function updateModalReviews(){
	result = "";
	food = $('#myModalLabel').text();
	for (i = 0; i < reviews.length; i++){
		if (food == reviews[i]["fooditem"]){
			result = reviews[i]["rev"];
			break;
		}
	}

	//$('.rating-stars').attr('style','width: ' + rating + '%;');
	//instead of this ^^ do it for a text box that should appear in top right of modal
}

function submitModalReview(){

	//meal = $('.meal_button').text();
	//loc = $('.location_button').text();
	food = $('#myModalLabel').text();
	review = $('#userreview').val();
	user = $('#userinfo').val();

	console.log("inside submitModalReview()");
	console.log(review);
	console.log(user);

	if (review == "" || user == ""){
		alert("Please fill out both the username and review boxes and resubmit");
		return;
	}

	$('#userreview').val("");
	$('#userinfo').val("");

	//rev = $some text input box (like captains log)

	//console.log(review, user);

	parameters = "fooditem=" + food + "&review=" + review + "&user=" + user;

	console.log("sbumitting modal review: " + parameters);

	request = new XMLHttpRequest();
	url = "http://stark-garden-5420.herokuapp.com/sendReview";
	request.open("POST", url, true);

	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//request.setRequestHeader("Content-length", parameters.length);
	//request.setRequestHeader("Connection", "close");

	request.send(parameters);

}

// function updateModalRating(){
// 	result = 0.0;
// 	food = $('#myModalLabel').text;
// 	for (i = 0; i < ratings.length; i++){
// 		if (food == ratings[i]["fooditem"]){
// 			result = ratings[i]["stars"];
// 			break;
// 		}
// 	}
// 	rating = result.toString();
// 	console.log(rating);

// 	$('.rating-stars').attr('style','width: ' + rating + '%;');
// }

// function submitModalRating(){
// 	percentage = $('.rating-stars').getAttribute('style').
// 	console.log("percentage of 5 stars: " + percentage);
// 	rating = S(percentage).strip('width: ', '%;').toFloat();
// 	rating = rating / 20;

// 	meal = $('.meal_button').text;
// 	loc = $('.location_button').text;
// 	food = $('#myModalLabel').text;

// 	parameters = "meal=" + meal + "&loc=" + loc + "&fooditem=" + food + "&stars=" + rating;

// 	console.log("paramaters to post: " + paramaters);

// 	request = new XMLHttpRequest();
// 	url = "http://sheltered-badlands-7534.herokuapp.com/sendRating";
// 	request.open("POST", url, true);

// 	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 	request.setRequestHeader("Content-length", parameters.length);
// 	request.setRequestHeader("Connection", "close");

// 	request.send(parameters);

// }