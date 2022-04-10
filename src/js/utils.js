import $ from 'jquery';
import axios from "axios";
const qs = require('qs');

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

  static sendRequest = (url, options) => {
    return new Promise(async (resolve, reject) => {
      const reqOption = {
        url: url,
        method: options.method.toUpperCase(),
        headers: {
          'accept': '*/*',
        },
      };
      if (options.method.toUpperCase() !== 'GET') {
        reqOption.data = qs.stringify(options.data);
      }
      axios(reqOption).then(function (response) {
        resolve(response);
      }).catch(reject);
    });
  };

  static setupChromeWebRequestBlockers() {
    console.log('ok');
    chrome.webRequest.onBeforeSendHeaders.addListener(details => {
      console.log(details);
      let requestHeaders = details.requestHeaders;
      console.log(details);
      return { requestHeaders: details.requestHeaders };
    }, {
      urls: ["https://cbh-server.herokuapp.com/*"]
    }, ['blocking', 'requestHeaders']);
  }
}

export default Utils;
