const express = require('express'),
    app = express(),
    httpsOptions = require('./cert/https'),
    https = require('https').Server(httpsOptions, app),
    io = require('socket.io')(https),
    dataChar = require('./Data/DataChar'),
    generator = require('generate-password'),
    pgp = require("pg-promise")( /*options*/ );

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'usersdb',
    user: 'emercasa',
    password: '26081986Ktyf'
};
const db = pgp(cn);

app.use("/", express.static(__dirname + "../../auth"));
app.use("/Conflict", express.static(__dirname + "../../409"));


const urlPars = express.urlencoded({ extended: false });
app.post("/reg", urlPars, function(req, res) {
    const token = generator.generate({
        length: 15,
    });
    const query = 'SELECT * FROM users WHERE nickname = $1 LIMIT 1;',
        queryOn = 'INSERT INTO users(nickname, password, email, datereg, token) VALUES($1, $2, $3, $4, $5) RETURNING nickname, token;';

    db.one(query, [req.body.regNick])
        .then(function(data) {
            console.log(data, req.body.regNick);
            res.redirect(301, "/");
        })
        .catch(function() {
            db.query(queryOn, [req.body.regNick, req.body.regPass, req.body.regEmail, new Date(), token])
                .then(function(data) {
                    console.log(data);
                    app.use(`/game/${token}/${req.body.regNick}`, express.static(__dirname + "../../main"));
                    res.redirect(302, `../game/${token}/${req.body.regNick}`);
                })
                .catch(function(error) {
                    console.log("ERROR:", error);
                });
            console.log(req.body);
        });
});
app.post("/auth", urlPars, function(req, res) {
    const queryIn = 'SELECT * FROM users WHERE nickname = $1 AND password = $2 AND online = $3 LIMIT 1;';
    db.one(queryIn, [req.body.authNick, req.body.authPass, false])
        .then(function(data) {
            console.log(data);
            app.use(`/game/${data.token}/${data.nickname}`, express.static(__dirname + "../../main"));
            res.redirect(302, `../game/${data.token}/${req.body.authNick}`);
        })
        .catch(() => {
            console.log(req.body.authNick, req.body.authPass);
            res.redirect(301, "/");
        })
});

io.on('connection', socket => {
    console.log(`${socket.handshake.query.name} connected`);
    let OnUserTemp = socket.handshake.query.name.trim();
    const changeOnline = 'UPDATE users SET online = $2 WHERE nickname = $1 RETURNING nickname, online;';
    db.one(changeOnline, [OnUserTemp, true])
        .then(function(data) {
            console.log(data);
            socket.send(dataChar);
        })
        .catch(function(error) {
            console.log("ERROR:", error);
        });

    socket.on('disconnect', () => {
        console.log(`${socket.handshake.query.name} disconnected`);
        let OffUserTemp = socket.handshake.query.name.trim();
        const changeOffline = 'UPDATE users SET online = $2 WHERE nickname = $1 RETURNING nickname, online;';
        db.one(changeOffline, [OffUserTemp, false])
            .then(function(data) {
                console.log(data);
            })
            .catch(function(error) {
                console.log("ERROR:", error);
            });
    });
});

https.listen(3443, "192.168.1.100", () => {
    console.log("Server running to 192.168.1.100:3443")
});