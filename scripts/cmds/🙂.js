 module.exports = {
 config: {
	 name: "🙂",
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
 if (event.body && event.body.toLowerCase() === "🙂") {
 return message.reply({
 body: " 「 🧚‍♂️𝄞⋆⃝🧚‍♀️কা্ঁউ্ঁকে্ঁ ࿐য্ঁদি্ঁ࿐ স্ঁত্যি্ঁ ࿐ভা্ঁলো্ঁবা্ঁসো্ঁ🧚‍♀️𝄞⋆⃝🧚‍♂️\n🧚‍♀️𝄞⋆⃝🧚‍♂️তা্ঁহ্ঁলেঁ ࿐হা্ঁজা্ঁর্ঁ࿐ব্য্ঁস্ত্ঁতা্ঁর্ঁ࿐মা্ঁঝে্ঁও্ঁ🧚‍♂️𝄞⋆⃝🧚‍♀️\n🧚‍♂️𝄞⋆⃝🧚‍♀️তা্ঁকে্ঁ ࿐এ্ঁক্ঁটু্ঁ স্ঁম্ঁয়্ঁ দি্ঁও্ঁ🧚‍♀️𝄞⋆⃝🧚‍♂️ \n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n🆁🅾🅱🅸🆄🅻」",
 attachment: await global.utils.getStreamFromURL("https://video.xx.fbcdn.net/v/t42.3356-2/465038032_27717610997829967_8101501418448629740_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeGbOImZXyNUKfUKjqglCYdyYD5RQSfVAz5gPlFBJ9UDPnUa7qIvjdxz49HPswUdnoPceJO5ET35FTWZqUQ1rGUb&_nc_ohc=VKb5IJL5NJcQ7kNvgGwlFeo&_nc_zt=28&_nc_ht=video.xx&_nc_gid=A3R956uRkGoxg8F4NcFxG8Y&oh=03_Q7cD1QGwFc_xK0Xirykq4TOiOcDC3En6sRXO32zvLisam_tB-Q&oe=6724277E&dl=1")
 });
 }
 }
}
