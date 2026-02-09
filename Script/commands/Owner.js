const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU",
  description: "Show Owner Info with styled box & random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  
  const info = `
╔═════════════════════ ✿
║ ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨
╠═════════════════════ ✿
║ 👑 𝗡𝗮𝗺𝗲 : ᖴᴀʜɪᴍ ᗩʜᴍᴇᴅ
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : ᖴᴀʜɪᴍ
║ 🎂 𝗔𝗴𝗲 : 𝟭𝟴+
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗶𝗻𝗴𝗹𝗲
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝗛𝗦𝗖
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : ᴅʜᴀᴋᴀ
╠═════════════════════ ✿
║ 🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
╠═════════════════════ ✿
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
║ fb.com/61587926753645
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 :
║ m.me/61587926753645
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :
║ wa.me/01771240377
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 :
║ t.me/fahimahmedraj420
╚═════════════════════ ✿
`;

  const images = [
    "https://i.imgur.com/Dq1w3Ns.jpeg", "https://i.imgur.com/IFs8uSj.jpeg", "https://i.imgur.com/SpkOQj0.jpeg", "https://i.imgur.com/khIwIo3.jpeg", "https://i.imgur.com/9wcV95H.jpeg", "https://i.imgur.com/NgdnlRp.jpeg", "https://i.imgur.com/uij9Us1.jpeg", "https://i.imgur.com/VSOwRRO.jpeg", "https://i.imgur.com/URhRBPi.jpeg", "https://i.imgur.com/YZtWQSx.jpeg", "https://i.imgur.com/ZLYUL5w.png", "https://i.imgur.com/ArDPP2g.jpeg", "https://i.imgur.com/fwvU6kC.png", "https://i.imgur.com/YMESPIC.jpeg", "https://i.imgur.com/xwmZsiu.jpeg", "https://i.imgur.com/Aw1PYQq.jpeg", "https://i.imgur.com/1ZjnuwN.jpeg"
  ];

  const randomImg = images[Math.floor(Math.random() * images.length)];

  const callback = () => api.sendMessage(
    {
      body: info,
      attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
    },
    event.threadID,
    () => fs.unlinkSync(__dirname + "/cache/owner.jpg")
  );

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(__dirname + "/cache/owner.jpg"))
    .on("close", () => callback());
};
