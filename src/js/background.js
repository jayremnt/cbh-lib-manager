// background
import Clm from "./clm";
import Utils from "./utils";

if (Clm.isBackground) {
	chrome.browserAction.onClicked.addListener(function(tab) {
		console.log(document.location.href);
		chrome.tabs.create({
			active: true,
			url:  'index.html'
		}, null);
	});
	Clm.startup().then(async () => {
		console.log("You're " + (Clm.isLoggedIn ? "logged in": "not logged in"));
		Utils.setupChromeWebRequestBlockers();
		if (!Clm.isLoggedIn) return false;
	})
}
