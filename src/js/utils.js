import $ from 'jquery';

class Utils {

	static ENVIRONMENTS = {
		CORDOVA: "cdv",
		CHROME: "chrome",
		WEB: "web",
	};
	static env = Utils.ENVIRONMENTS.CORDOVA;

	static setEnv(env) {
		this.env = env;
	}

	static async getData(key, defaultValue = '') {
		if (this.env === this.ENVIRONMENTS.CHROME) {
			let result = await chrome.storage.local.get([key]);
			return typeof result[key] === 'undefined' ? defaultValue : result[key];
		} else {
			return (JSON.parse(localStorage.getItem(key)) || defaultValue);
		}
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
				data: options.data,
				dataType: 'text',
				success: (res) => {
					resolve({
						data: res
					});
				}
			}).fail(reject);
		});
	}
}

export default Utils;