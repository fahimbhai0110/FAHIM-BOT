const fs = require("fs-extra");
const request = require("request");

module.exports.config = {
 name: "helpall",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "SHAHADAT SAHU",
 description: "Displays all available commands in one page",
 commandCategory: "system",
 usages: "[No args]",
 cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
 const { commands } = global.client;
 const { threadID, messageID } = event;

 const allCommands = [];

 for (let [name] of commands) {
 if (name && name.trim() !== "") {
 allCommands.push(name.trim());
 }
 }

 allCommands.sort();

 const finalText = `╔═══❖ 🌟 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓 🌟 ❖═══╗
${allCommands.map(cmd => `║ ➔ ${cmd}`).join("\n")}
╠═════🔰 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 🔰═════╣
║ 🤖 𝐁𝐨𝐭: ─꯭─⃝‌‌ᖴᴀʜɪᴍ 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭
║ 👑 𝐎𝐰𝐧𝐞𝐫 : ᖴᴀʜɪᴍ ᗩʜᴍᴇᴅ
║ 📦 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬: ${allCommands.length} 
╚═══════════════════════╝`;

 
 const backgrounds = [
 "https://i.imgur.com/Dq1w3Ns.jpeg", "https://i.imgur.com/IFs8uSj.jpeg", "https://i.imgur.com/SpkOQj0.jpeg", "https://i.imgur.com/khIwIo3.jpeg", "https://i.imgur.com/9wcV95H.jpeg", "https://i.imgur.com/NgdnlRp.jpeg", "https://i.imgur.com/uij9Us1.jpeg", "https://i.imgur.com/VSOwRRO.jpeg", "https://i.imgur.com/URhRBPi.jpeg", "https://i.imgur.com/YZtWQSx.jpeg", "https://i.imgur.com/ZLYUL5w.png", "https://i.imgur.com/ArDPP2g.jpeg", "https://i.imgur.com/fwvU6kC.png", "https://i.imgur.com/YMESPIC.jpeg", "https://i.imgur.com/xwmZsiu.jpeg", "https://i.imgur.com/Aw1PYQq.jpeg", "https://i.imgur.com/1ZjnuwN.jpeg"
 ];
 const selectedBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
 const imgPath = __dirname + "/cache/helpallbg.jpg";

 const callback = () =>
 api.sendMessage({ body: finalText, attachment: fs.createReadStream(imgPath) }, threadID, () => fs.unlinkSync(imgPath), messageID);

 request(encodeURI(selectedBg))
 .pipe(fs.createWriteStream(imgPath))
 .on("close", () => callback());
};
