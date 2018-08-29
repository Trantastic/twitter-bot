var readlineSync = require("readline-sync")
var Twit = require("twit");
var config = require("./config");
 
var T = new Twit(config);


var keyword = readlineSync.question("What keyword do you want to use?");
var count = readlineSync.question("How many do you want displayed?");
var params = { q: keyword, count: parseInt(count)};

T.get('search/tweets', params, getTweets);

function getTweets() {
	var tweets = data.statuses;

	for(var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text);
	}
}