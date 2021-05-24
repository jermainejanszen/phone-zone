
const express = require('express');
var path = require('path');
var session = require('express-session');

const phoneRouter = require('../routes/phoneData.server.routes')
const userRouter = require('../routes/userData.server.routes')

const PORT = process.env.PORT || 3001;
const app = express();
app.set('views', path.join(__dirname,'../views'));

app.use('/phone', phoneRouter);
app.use('/user', userRouter);

app.use(express.static(path.join(__dirname, '../views/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.use(session({
    secret: 'ssssshhhhh',
    cookie: {maxAge: 60000},
    resave: true,
    saveUninitialized: true
}));

module.exports = app;
