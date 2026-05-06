const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://arslan-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/heroritik42/Neon-AI-bot",
REPO_NAME: process.env.REPO_NAME || "Neon-AI",
BOT_NAME: process.env.BOT_NAME || "Neon-AI",
DESCRIPTION: process.env.DESCRIPTION || "Neon-AI WORLD POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "916205232179",
OWNER_NAME: process.env.OWNER_NAME || "Neon-Coder",
ST_SAVE: process.env.ST_SAVE || "Neon-AI-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "Neon-AI-BY-NEON-CODER",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY Neon-AI`* _*POWERD BY*_ *Neon-Coder Whtsapp Bot*",
FOOTER: process.env.FOOTER || "Neon-AI",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ Neon-AI BY Neon-Coder*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "0029VbCREZd8feww7m2kc71v@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://www.whatsapp.com/channel/0029VbCREZd8feww7m2kc71v",
INSTA: process.env.INSTA || "https://Instagram.com/hacker_attitude42",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/kh4wjs.png",
OWNER_IMG: process.env.OWNER_IMG || "https://files.catbox.moe/kh4wjs.png",
AI_IMG: process.env.AI_IMG || "https://files.catbox.moe/kh4wjs.png",
SEARCH_IMG: process.env.SEARCH_IMG || "https://files.catbox.moe/kh4wjs.png",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://files.catbox.moe/kh4wjs.png",
MAIN_IMG: process.env.MAIN_IMG || "https://files.catbox.moe/kh4wjs.png",
GROUP_IMG: process.env.GROUP_IMG || "https://files.catbox.moe/kh4wjs.png",
FUN_IMG: process.env.FUN_IMG || "https://files.catbox.moe/kh4wjs.png",
TOOLS_IMG: process.env.TOOLS_IMG || "https://files.catbox.moe/kh4wjs.png",
OTHER_IMG: process.env.OTHER_IMG || "https://files.catbox.moe/kh4wjs.png",
MOVIE_IMG: process.env.MOVIE_IMG || "https://files.catbox.moe/kh4wjs.png",
NEWS_IMG: process.env.NEWS_IMG || "https://files.catbox.moe/kh4wjs.png",
PP_IMG: process.env.PP_IMG || "https://files.catbox.moe/kh4wjs.png"
};
