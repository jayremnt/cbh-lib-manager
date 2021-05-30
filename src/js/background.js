// background
import Mext from "./mext";


if (Mext.isBackground) {
	chrome.browserAction.onClicked.addListener(function(tab) {
		console.log(document.location.href);
		chrome.tabs.create({
			active: true,
			url:  'index.html'
		}, null);
	});
	Mext.startup().then(async () => {
		console.log("You're " + (Mext.isLoggedIn ? "logged in": "not logged in"));
		if (!Mext.isLoggedIn) return false;
		Utils.setupChromeWebRequestBlockers();
		let systemUID = await Utils.getData("current_uid");
		if (systemUID !== Mext.currentUID) {
			await Mext.loadAccountInfo();
		}
	})
}