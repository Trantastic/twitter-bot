var readlineSync = require("readline-sync")
var Twit = require("twit");
var config = require("./config");
 
var T = new Twit(config);


var keyword = readlineSync.question("What keyword do you want to use? ");
var count = readlineSync.question("How many do you want displayed? ");
var params = { q: keyword, count: parseInt(count)};

// console.log(params);

// T.get('search/tweets', params, getTweets);

// function getTweets(err, data, res) {
// 	var tweets = data.statuses[0];

// 	for(var i = 0; i < tweets.length; i++) {
// 		console.log(tweets[i].text);
// 	}
// }

T.get('search/tweets', params, function(err, data, res) {
	console.log(data.statuses[0]);
});