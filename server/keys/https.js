const fs = require('fs'); 
const path = require('path');

const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
};

module.exports = httpsOptions;