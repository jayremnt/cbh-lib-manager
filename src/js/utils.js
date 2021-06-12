import $ from 'jquery';

class Utils {

	static ENVIRONMENTS = {
		CORDOVA: "cdv",
		CHROME: "chrome",
		WEB: "web",
	};
	static env = Utils.ENVIRONMENTS.CHROME;

	static setEnv(env) {
		this.env = env;
	}

	static async getData(key, defaultValue = '') {
		return new Promise(resolve => {
			if (this.env === this.ENVIRONMENTS.CHROME) {
				chrome.storage.local.get([key], result => {
					resolve(typeof result[key] === 'undefined' ? defaultValue : result[key]);
				});
			}
			else {
				resolve(JSON.parse(localStorage.getItem(key)) || defaultValue);
			}
		});
	}

	static async setData(key, value) {
		let data = {};
		data[key] = value;
		return await chrome.storage.local.set(data);
	}

	static sendRequest(url, options) {
		return new Promise((resolve, reject) => {
			if (typeof options.method === "undefined") console.error('options.method must be defined');
			if (typeof options.data === "undefined") options.data = {};
			$.ajax(url, {
				method: options.method.toUpperCase(),
				data: JSON.stringify(options.data),
				dataType: 'text',
				success: (res) => {
					resolve({
						data: res
					});
				}
			}).fail(reject);
		});
	}

	static setupChromeWebRequestBlockers() {
		console.log('ok');
		chrome.webRequest.onBeforeSendHeaders.addListener(details => {
			console.log(details);
			let requestHeaders = details.requestHeaders;
			let headerContentTypeIndex = requestHeaders.findIndex(row => row.name === "Content-Type");
			if (headerContentTypeIndex >= 0) requestHeaders[headerContentTypeIndex].value = "application/json";

			console.log(details);
			return {requestHeaders: details.requestHeaders};
		}, {
			urls: ["https://cbh-server.herokuapp.com/*"]
		}, ['blocking', 'requestHeaders']);
	}
}

export default Utils;