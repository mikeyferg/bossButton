

var url = "http://www.amazon.com/WORLDS-BEST-BOSS-Coffee-Mug/dp/B003515AAG";

chrome.browserAction.onClicked.addListener(function(tab) { 
	window.open(url, "_blank", "toolbar=0,location=0,menubar=0");
}); 


