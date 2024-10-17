const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349131021928";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_41_10_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDk4LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg5LFxuICAgICAgICA5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMyLFxuICAgICAgICA1NixcbiAgICAgICAgNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDksXG4gICAgICAgIDEwLFxuICAgICAgICAzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1LFxuICAgICAgICA0LFxuICAgICAgICAyMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY0LFxuICAgICAgICAzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1LFxuICAgICAgICA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMwLFxuICAgICAgICA5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICA5MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDczLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1LFxuICAgICAgICA4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc4LFxuICAgICAgICA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDkzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibzcxb2NaaEhKdC9Mc2RiNE1mZ0F4VkpMSjM2RUV3QmxvYzJtQkRCTkREWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibmQwVzB0TFlTdi03YkttSERPLW5fd1wiLFxuICBcInBob25lSWRcIjogXCJiZTk3OTYxNS03YjQxLTQxNjQtOWVmYy1hYzNmMjk5MGVlYzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICAxNCxcbiAgICAgIDExMixcbiAgICAgIDEzMixcbiAgICAgIDQsXG4gICAgICA2MCxcbiAgICAgIDMyLFxuICAgICAgMjQwLFxuICAgICAgMTE1LFxuICAgICAgMjEsXG4gICAgICAzMixcbiAgICAgIDE4NSxcbiAgICAgIDIyOSxcbiAgICAgIDIyMixcbiAgICAgIDExMyxcbiAgICAgIDIzLFxuICAgICAgODYsXG4gICAgICAxMzgsXG4gICAgICAyNDMsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICA0NyxcbiAgICAgIDgxLFxuICAgICAgMjksXG4gICAgICAxMzQsXG4gICAgICAyMTIsXG4gICAgICAyMDIsXG4gICAgICAxNTAsXG4gICAgICAxMzcsXG4gICAgICAxMCxcbiAgICAgIDYzLFxuICAgICAgMjQzLFxuICAgICAgMTk5LFxuICAgICAgMjE3LFxuICAgICAgMTIsXG4gICAgICAxNzUsXG4gICAgICAyMjksXG4gICAgICA1OSxcbiAgICAgIDIwOSxcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkMzNDcxUTFSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTUwOTk4NzA2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwNDczMzE2MzQwOTU1ODoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09QZHJ1VUNFTEsweGJnR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNTNKVlR5aURaejJhM21DWHhXZVltTEtQWFVyY3d4SHN5SGxtcmwyb2xDdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVdnBrS1dTMFB1UGliSytmMHdpZ3lsTWkvRXA0SXpVNHlVUFlzc3N1alhwUzZPS01NT0FPTnNUVTdqaTVpM041TCt0ZW9RVmxhVUVNUTdFSmhqaWxBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjdHVrYTVUQzN1Y2oyanFuRG9DOVpDMDhsRWtsTWRTRmY3M1BnSWdEWkVPazhLVEZCVkhOdkVrUEJuK3RWWUJURmlQcGlkZ2t2Q0tqTmc2MHhKUURqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTUwOTk4NzA2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTE5MDQ1NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNVZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1VnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNDlFM1VWMHAxUW5ZV3NhS2tlazNaVE1uMFNzRlBIdVl3QVNQa3RCSDYxMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NDk0NDg5MzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODQxNjE1NDk0NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "𝘿𝙊𝙉𝙒𝙄𝙕 " , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝘿𝙊𝙉𝙒𝙄𝙕  』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝘿𝙊𝙉𝙒𝙄𝙕 ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "D̶̠̯̤̱̫̦̞̉̎́̒ͅỠ̷̡̧̤͈͙̲͍̩̂͂N̴̩̜̭̫͓͑͐̿͂͆͛̕͘W̶̛̟̝͓̣͍̓I̶͉̱̼̖̝͔̻͛̉͒͊͋͗͒̚ͅZ̷̼̘̮̱̯̟̋̀̂̈́́̈"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
