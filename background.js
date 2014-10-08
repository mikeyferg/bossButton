

var url = "http://www.amazon.com/WORLDS-BEST-BOSS-Coffee-Mug/dp/B003515AAG";

/*var url = chrome.storage.sync.get('savedURL');


 document.getElementById("save").onclick = function() {
 	url = document.getElementById('customURL').value;
 } 



document.getElementById("save").onclick = function() {
	// Get a value saved in a form.
	console.log("clicked");
	//chrome.storage.sync.clear();﻿
	url = document.getElementById('customURL').value;

	// Save it using the Chrome extension storage API.
	//chrome.storage.sync.set({'savedURL': url}, function() {
	 // Notify that we saved.
	//message('Settings saved');
	})
	
} */



chrome.browserAction.onClicked.addListener(function(tab) { 
	//alert('icon clicked')
	window.open(url, "_blank", "toolbar=0,location=0,menubar=0");

}); 


