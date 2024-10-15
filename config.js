const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "zBdkyJID#nGcQdZIBZIadNMGqr_T9Jp3VybRaxuZthG6D598kL6M",
MONGODB: process.env.MONGODB || "mongodb://mongo:qPVdtWEFlNwLopYqjQSnKSqAMUSOwmgX@autorack.proxy.rlwy.net:18720",
