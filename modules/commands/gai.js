module.exports.config = {
	name: "gai",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH với sự Sp của DũngUwU",
	description: "Random ảnh Gá xinh có phí",
	commandCategory: "random-img",
	usages: "gái",
	cooldowns: 3
};

module.exports.run = async ({ api, event, Currencies }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 0) {
		axios.get('http://web-api-teammucode.ga/gai.php').then(res => {
		var callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + '/cache/gái.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/gái.jpg'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/gái.jpg')).on("close", callback).then(Currencies.setData(event.senderID, options = {money: money - 0}));
			})
	} else return api.sendMessage("Bạn cần 0 đô ?",event.threadID,event.messageID);
}