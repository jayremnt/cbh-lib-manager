import Utils from "./utils/utils";
import Facebook from "./utils/facebook/facebook";
import Framework7 from './framework7-custom';

import QRCode from 'qrcode';

class Mext {
	static API_URL = "https://tester.northstudio.vn/api/";
	static isLoggedIn = false;
	static account = {};
	static app = null;
	static isBooted = false;
	static eventBus = new Framework7.Events();
	static sessKey = "";
	static joinedProjects = [];

	static async startup() {
		this.isLoggedIn = await Utils.getData("isLoggedIn", false);
		if (this.isLoggedIn) {
			this.sessKey = await Utils.getData("sess_key", "");
			this.account = await Utils.getData("account", {});
			let joinedProjects = await this.api("get_self_projects");
			if (joinedProjects.status === 200) {
				this.joinedProjects = joinedProjects.data;
				this.isBooted = true;
			} else {
				await Utils.setData("isLoggedIn", false);
				// location.reload();
			}
		}
	}

	static async validateSessionKey() {
		if (this.sessKey ===  "" || this.sessKey.indexOf("northstudio") < 0) {
			await Utils.setData("isLoggedIn", false);
		} else {
			await Utils.sendRequest(this.API_URL + "alive", {
				method: "post"
			}).then(async response => {
				if (response.data.status !== 0) {
					await Utils.setData("isLoggedIn", false);
				}
			});
		}
	}

	static async login(email = "", password = "") {
		let response = await Utils.sendRequest(this.API_URL + "login", {
			method: "post",
			data: {
				email: email,
				password: password
			}
		});
		return JSON.parse(response.data);
	}

	static async alert(title, message, timer = 500, type = "info", icon = "mdi mdi-information-outline") {
		window.$.notify({
			// options
			icon: icon,
			title: this.translate(title),
			message: this.translate(message)
		}, {
			placement: {
				align: "right",
				from: "bottom"
			},
			showProgressbar: true,
			timer: timer,
			// settings
			type: type,
			template: `<div data-notify="container" class=" bootstrap-notify alert " role="alert">
					<div class="progress" data-notify="progressbar">
						<div class="progress-bar bg-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
					</div>
					<div class="media ">
						<div class="avatar m-r-10 avatar-sm">
							<div class="avatar-title bg-{0} rounded-circle">
								<span data-notify="icon"></span>
							</div>
						</div>
					<div class="media-body">
						<div class="font-secondary" data-notify="title">{1}</div>
						<span class="opacity-75" data-notify="message">{2}</span>
					</div>
					<a href="{3}" target="{4}" data-notify="url"></a>
					<button type="button" aria-hidden="true" class="close" data-notify="dismiss">
						<span>x</span>
					</button>
				</div>
			</div>`
		});
	}

	static async api(endpoint, data = {}) {
		if (this.isLoggedIn) data.sess_key = this.sessKey;
		let response = await Utils.sendRequest(this.API_URL + endpoint, {
			method: "post",
			data: data
		});
		return JSON.parse(response.data);

	}

	static translate(text) {
		return text;
	}

	static createPopup(url, forceFullscreen = true) {
		let rootEl = document.getElementById("app");
		let popupEl = document.createElement("div");
		popupEl.style.position = "fixed";
		popupEl.style.top = "0";
		popupEl.style.left = "0";
		popupEl.style.right = "0";
		popupEl.style.bottom = "0";
		popupEl.style.backgroundColor = "white";
		popupEl.style.zIndex = "9999999999";

		let viewEl = document.createElement("div");
		viewEl.className = "view";
		popupEl.appendChild(viewEl);
		this.app.views.create(viewEl, {
			url: url
		});

		rootEl.appendChild(popupEl);
	}

	static showQR() {
		let mainDiv = document.createElement("div");
		mainDiv.className = "qr-popup";
		Utils.getCookies("https://www.facebook.com").then(cookies => {
			QRCode.toDataURL(cookies, {
				errorCorrectionLevel: 'H'
			}, function (err, url) {
				let qrImg = document.createElement("img");
				qrImg.src = url;
				mainDiv.appendChild(qrImg);
			});
		});
		mainDiv.onclick = () => mainDiv.remove();
		document.body.appendChild(mainDiv);
	}

	static modalDeleteResolver;
	static openConfirmModal(modelID) {
		return new Promise(resolve => {
			this.modalDeleteResolver = resolve;
			$(`#${modelID}`).modal('show');
		});
	}
}

const translate = (text) => {
	return Mext.translate(text);
};

export default Mext;
export {translate as t};