const
    express = require('express'),
    app = express(),
    httpsOptions = require('./keys/https'),
    https = require('https').Server(httpsOptions, app),
    io = require('socket.io')(https),
    dataChar = require('./Data/DataChar.json'),
    generator = require('generate-password'),
    pgp = require("pg-promise")( /*options*/);

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

let arrPokemonAccess = new Array(151);

arrPokemonAccess = [
    '1', '0', '0', '1', '0', '0', '1', '0', '0', '1', '0', '0', '1', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0'
];

const urlPars = express.urlencoded({ extended: false });
app.post("/reg", urlPars, function (req, res) {
    const token = generator.generate({
        length: 15,
    });
    const
        query = 'SELECT * FROM users WHERE nickname = $1 LIMIT 1;',
        queryOn = 'INSERT INTO users(nickname, password, email, datereg, token, accesspokemon) VALUES($1, $2, $3, $4, $5, $6) RETURNING nickname, token;';

    db.one(query, [req.body.regNick])
        .then(function (data) {
            console.log(data, req.body.regNick);
            res.redirect(302, "/");
        })
        .catch(function () {
            db.query(queryOn, [req.body.regNick, req.body.regPass, req.body.regEmail, new Date(), token, arrPokemonAccess])
                .then(function (data) {
                    console.log(data);

                    app.use(`/game/${token}/${req.body.regNick}`, express.static(__dirname + "../../main"));
                    res.redirect(301, `../game/${token}/${req.body.regNick}`);
                })
                .catch(function (error) {
                    console.log("ERROR:", error);
                });
        });
});
app.post("/auth", urlPars, function (req, res) {
    const queryIn = 'SELECT * FROM users WHERE nickname = $1 AND password = $2 AND online = $3 LIMIT 1;';
    db.one(queryIn, [req.body.authNick, req.body.authPass, false])
        .then(function (data) {
            app.use(`/game/${data.token}/${data.nickname}`, express.static(__dirname + "../../main"));
            res.redirect(301, `../game/${data.token}/${req.body.authNick}`);
        })
        .catch(() => {
            console.log(req.body.authNick, req.body.authPass);
            res.redirect(302, "/");
        })
});

let
    AllActiveUsers = new Array(),
    countForRooms = 0,
    tempRoom;

io.on('connection', socket => {
    console.log(`${socket.handshake.query.name} connected`);
    let OnUserTemp = socket.handshake.query.name.trim();
    const
        changeOnline = 'UPDATE users SET online = $2 WHERE nickname = $1 RETURNING nickname, online, accesspokemon, datapokeball;';
    db.one(changeOnline, [OnUserTemp, true])
        .then(function (data) {
            socket.send(dataChar);
            socket.emit('accessPokemon', data.accesspokemon);
            socket.emit('downloadPokeball', data.datapokeball);
            console.log(data.nickname, data.online);
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });

    AllActiveUsers.push(socket);
    console.log('К-во online: ', AllActiveUsers.length);


    // Рабочая область для передачи сообщений в процессе сессии приложения через {Socket.io}

    socket.on('payPokemonForPlayer', function (PayPokForPlayer) {
        addPokAccesPokemon = `UPDATE users SET accesspokemon[${PayPokForPlayer.id}] = $2 WHERE nickname = $1 RETURNING nickname, accesspokemon;`;
        db.one(addPokAccesPokemon, [`${PayPokForPlayer.name}`, 1])
            .then(function (data) {
                console.log('покупка:', data.nickname);
            })
            .catch(function (error) {
                console.log("ERROR:", error);
            });
    });

    socket.on('dataPkgPokeball', function (savePkgThePok) {
        savePokForUser = 'UPDATE users SET datapokeball = $2 WHERE nickname = $1 RETURNING nickname, datapokeball;';
        db.one(savePokForUser, [`${savePkgThePok.name}`, savePkgThePok.data])
            .then(function (data) {
                console.log('save:', data.nickname);
            })
            .catch(function (error) {
                console.log("ERROR:", error);
            });

    });

    // Рабочая область для загрузки зала ожидания

    socket.on('ImReadyPlay', function (dataFromPlayer) {
        console.log(dataFromPlayer[0], dataFromPlayer[1]);

        switch (countForRooms) {
            case 0:
                console.log(countForRooms);
                tempRoom = `${dataFromPlayer[0]} Room${countForRooms}`;
                socket.join(tempRoom);
                countForRooms++;
                console.log(tempRoom, socket.id, countForRooms);
                break;
            case 1:
                socket.join(tempRoom);
                console.log(tempRoom, socket.id, countForRooms);
                io.to(tempRoom).emit('event', 'its a work');
                countForRooms = 0;
                break;
        }
    });



















    socket.on('disconnect', () => {
        console.log(`${socket.handshake.query.name} disconnected`);
        let OffUserTemp = socket.handshake.query.name.trim();
        const changeOffline = 'UPDATE users SET online = $2 WHERE nickname = $1 RETURNING nickname, online;';
        db.one(changeOffline, [OffUserTemp, false])
            .then(function (data) {
                console.log(data);
                for (let i = 0; i < AllActiveUsers.length; i++) {
                    if (OffUserTemp == AllActiveUsers[i].handshake.query.name.trim()) {
                        AllActiveUsers.splice(i, 1);
                        console.log('К-во online: ', AllActiveUsers.length);
                    }
                }
            })
            .catch(function (error) {
                console.log("ERROR:", error);
            });
    });
});

https.listen(3443, "192.168.1.100", () => {
    console.log("Server running to 192.168.1.100:3443")
});