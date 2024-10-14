const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "OEUiwAbb#TUnUwThuzSZktzzLi0TntPQIknA_OwKmZXOTWSSwb78",
MONGODB: process.env.MONGODB || "enter your mongodb url",
};

