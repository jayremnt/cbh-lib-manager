import Framework7 from './framework7-custom';
import Utils from "./utils";
import QRCode from 'qrcode';
import CONSTANTS from "./constants";

class Clm {
	static isLoggedIn = false;
	static account = {};
	static app = null;
	static isBooted = false;
	static eventBus = new Framework7.Events();
	static sessKey = "";
	static isBackground = window.location.href.includes("generated_background_page.html");

	static async startup() {
		this.isLoggedIn = await Utils.getData("is_logged_in", false);
		if (this.isLoggedIn) {
			this.sessKey = await Utils.getData("sess_key", "");
			this.account = await Utils.getData("account", {});
			console.log(this.account);
			this.isLoggedIn = await this.validateSessionKey();
			this.isBooted = true;
		}
	}

	static async validateSessionKey() {
		let validateData = await this.api('alive', {
			token: this.sessKey
		});
		return !validateData.data.is_expired;
	}

	static async api(endpoint, data = {}) {
		if (this.isLoggedIn) data.token = this.sessKey;
		console.log(data);
		let loader = $('#loader');
		console.log("loading...");
		loader.modal('show');
		let response = await Utils.sendRequest(CONSTANTS.API_URL + endpoint, {
			method: "post",
			data: data
		});
		console.log("loaded");
		await new Promise(_ => {
			setTimeout(() => {
				loader.modal('hide');
				_();
			}, 500);
		});
		return JSON.parse(response.data);
	}

	static async alert(title, message, timer = 500, type = "info", icon = "mdi mdi-information-outline") {
		window.$.notify({
			// options
			icon: icon,
			title: title,
			message: message
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

	static timeConverter(UNIX_timestamp) {
		let a = new Date(UNIX_timestamp);
		let year = a.getFullYear();
		let month = a.getMonth() + 1;
		let date = a.getDate();
		let hour = a.getHours();
		let min = a.getMinutes();
		let sec = a.getSeconds();
		let time = date + '/' + month + '/' + year;
		return time;
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

	static modalResolver = function(_) {
		console.log(_);
		return _;
	};

	static openConfirmModal(modelID) {
		return new Promise(resolve => {
			this.modalResolver = resolve;
			$(`#${modelID}`).modal('show');
		});
	}
}

export default Clm;
