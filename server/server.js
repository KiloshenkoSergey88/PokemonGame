const   express = require('express'),
        app = express(),
        httpsOptions = require('./cert/https')
        https = require('https').Server(httpsOptions, app),
        io = require('socket.io')(https),
        dataChar = require('./Data/DataChar'),
        bodyParser = require('body-parser'),
        generator = require('generate-password');
        pgp = require("pg-promise")(/*options*/);

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'usersdb',
    user: 'emercasa',
    password: '26081986Ktyf'
};
const db = pgp(cn);

app.use("/", express.static(__dirname + "../../auth"));


const urlPars = bodyParser.urlencoded({extended: false});
app.post("/reg", urlPars, function (req, res) {
    const token = generator.generate({
        length: 15,
    });    
    const query = 'SELECT * FROM users WHERE nickname = $1 LIMIT 1;',
          queryIn = 'INSERT INTO users(nickname, password, email, datereg, token) VALUES($1, $2, $3, $4, $5) RETURNING nickname, token';

    db.one(query, [req.body.regNick])
    .then(function (data) {
        console.log(data, req.body.regNick);
        res.redirect(302, "/");
    })
    .catch(function () {
        db.query(queryIn, [req.body.regNick, req.body.regPass, req.body.regEmail, new Date(), token])
        .then(function (data) {
            console.log(data);
            let login = req.body.regNick;
            app.use(`/game/${token}/${login}`, express.static(__dirname + "../../main"));
            res.redirect(301, `../game/${token}/${login}`);
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
        console.log(req.body);
    });
});

https.listen(3443,"192.168.1.100", () => {
    console.log("Server running...")
});