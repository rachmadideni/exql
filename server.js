import express from 'express';
const app = express();
const server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App is listening on http://%s:%s', host, port);
    //console.log('api is live man'); 
});