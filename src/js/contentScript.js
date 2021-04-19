(() => {
    let sessionCounter = 0;
    let lastCheck = new Date().getTime();
    setInterval(() => {
        let currentDayStamp = ~~(new Date().getTime() / 1000 / (3600 * 24));
        if (!document.hidden) {
            let timeChanged = new Date().getTime() - lastCheck;
            sessionCounter += timeChanged;
            getData("time-" + currentDayStamp, 0).then(usedTime => {
                let timeCounter = usedTime + timeChanged;
                setData("time-" + currentDayStamp, timeCounter).then(() => {
                    // console.log("Used", timeCounter);
                });
            })
        }
        lastCheck = new Date().getTime();
    }, 5000);


    function setData(key, value = "") {
        return new Promise(resolve => {
            let data = {};
            data[key] = value;
            chrome.storage.local.set(data, resolve);
        });
    }

    function getData(key, defaultValue = "") {
        return new Promise(resolve => {
            chrome.storage.local.get([key], (result) => {
                resolve(typeof result[key] === "undefined" ? defaultValue: result[key]);
            })
        });
    }
})();