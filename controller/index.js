
const express = require('express');
var path = require('path');

const router = require('../routes/phoneData.server.routes')

const PORT = process.env.PORT || 3001;
const app = express();
app.set('views', path.join(__dirname,'../views'));

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

module.exports = app;
