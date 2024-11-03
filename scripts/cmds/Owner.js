module.exports = {
 config: {
	 name: "Owner",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "Owner") {
 return message.reply({
 body: " 「𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 𝗔𝗡𝗗 𝗔𝗗𝗠𝗜𝗡 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡\n𝗡𝗔𝗠𝗘:🇷 🇴 🇧 🇮 🇺 🇱♥️🇮 🇸 🇱 🇦 🇲\n𝗔𝗣𝗣:01887267477\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞:https://www.facebook.com/profile.php?id=100093774930731&mibextid=kFxxJD \n𝗔𝗗𝗗𝗥𝗘𝗦𝗦: 🇳 🇴 🇬 🇦 🇳」",
 attachment: await global.utils.getStreamFromURL("http://g-v1.onrender.com/9RSDocuHX.png")
 });
 }
 }
}
