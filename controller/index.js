
const express = require('express');
var path = require('path');

const phoneRouter = require('../routes/phoneData.server.routes')
const userRouter = require('../routes/userData.server.routes')

const PORT = process.env.PORT || 3001;
const app = express();
app.set('views', path.join(__dirname,'../views'));

app.use('/phone', phoneRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

module.exports = app;
