 module.exports = {
 config: {
	 name: "boss",
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
 if (event.body && event.body.toLowerCase() === "boss") {
 return message.reply({
 body: "     「সাইডে চাপ বস আসছে 😎\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗥𝗢𝗕𝗜𝗨𝗟 𝗞𝗜𝗡𝗚」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/cSzfR2L.mp4")
 });
 }
 }
}
