const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With KIRA-MD Hear
SESSION_ID: process.env.SESSION_ID || "Neon-AI~2026QKD7~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0ZVMjIzOXNjSmthOVhyODFWdWNBcFRuQjkwY3J3MVhHUnJsdGRsbTMxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWIyQmp1MG9pSUpRbE0wYXJFOCtZWUtSVjNWNFhMWitzR2UwbXVRNW0zRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSm5qdyttY0JISVo0cmlHd292SzlIY2xtQTBCUld6VE5oUlFJYThvN25rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJobFZLazNlekpYSlV3c2RsSTJxTko5VXBKQlNWRUJ0ak5rNmRJMGd2K3hRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhEKzRJQ1lxNEhTNmJDTHdFV1NMUk5YRm9qVEpocG1zQ1E5emhFWUs1SFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFKMjAzWUFkSXdXcVlJYTczT1pab3VPYThibyt0dm5jM2Q2QmF3TGhmejg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFQUUtVb2QrQ3BwK0g1QVcrM0tCeUtoelc5cVRkb3M1R0xwU3h2d2hIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3c3dUhRZzFBK1UwMU9LeTJLNlRzeks1Q2hic0ZMamNXejhEeFZHZURGaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJReDF2bmp6OVl6elBaR2xVRTVtTDdEOUZHU1R1ZmJyS3RMMUxLOVdWaGRFSHpXbXpzWW9FcFk3TWhMN3U2OEpUakh1MmIzaWtLMVg3WFdMZDhjOURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiJIemoweWVSTVhiOTlGbm0zZXRFVFRNQ04rQTZTZnRjeGlIZFVJL1RkQVg0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNjIwNTIzMjE3OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUNBNkI1Q0ExRENCNTVBN0M0MjczMDEwRUM3MEY5MzMiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3ODA3NTAyNn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE2MjA1MjMyMTc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQ0U1ODYzNEUzNUZFRUQ5QkUyOTBCMzlFODQ3MkZBQyIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc4MDc1MDI2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTYyMDUyMzIxNzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDODg2RDVBNTkxQzk5MjUxOThDNzkxQkU5Q0M4NjI0IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzgwNzUwMjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxNjIwNTIzMjE3OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUM2OTY1RDM4QjcxNjhDNTE4NkNBNTZDNjZCRTExNEQiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3ODA3NTAyN30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE2MjA1MjMyMTc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQ0I2NzhFOEFFODU0OEY5QkY0RjczMkI3QTY5MUU4OSIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc4MDc1MDI5fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ikg0UDlTSEpDIiwibWUiOnsiaWQiOiI5MTYyMDUyMzIxNzk6NEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjYzMzM4NTUzODQ3OTEzOjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMSHcvdGdCRUltTDdjOEdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTbFJPK1AwNWlOSHRNTlcrVS9YUngwT09GQmNJNUxKUHpsK1ZhQ1hIVHcwPSIsImFjY291bnRTaWduYXR1cmUiOiJHZ3NJalJBWnhOR2w0L2NSbWRPbndmaENJcXNGbzkwUDVuNElLUURCL1djZGtMb2MwOXBPZUxVWmM2cndIdnFwMXhHVHloSlJNdW0raEZjZlh2QkpBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMU1SbGYwTVhhZlpRVkFzSzF0Q1NxTjE2dEtDdkVBY1VYS05TRGMxNlpLOVBKR0tQRjNxRWNadmJUbjBoSVo5dVdNRkhURHprM3NOYzNjR0Q1dXhXQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2MzMzODU1Mzg0NzkxMzo0QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVcFVUdmo5T1lqUjdURFZ2bFAxMGNkRGpoUVhDT1N5VDg1ZmxXZ2x4MDhOIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRFFnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzgwNzUwMjQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSDNzIn0=",
// KIRA MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// KIRA MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "neoncoderofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Neon-AI 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Neon-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Neon-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "916205232179",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Neon-Coder",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "916205232179",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







