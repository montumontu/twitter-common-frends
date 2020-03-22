const express = require( 'express' ),
    app = express(),
    bodyParser = require( 'body-parser' ),
    port = process.env.PORT  || 3004,
    host = "0.0.0.0",
    path = require( 'path' ),
    user = require( './controllers/users' ).makeObject();

app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});


app.get('/twitter/mutual/friends/get:username1?:username2?', user.getMutualFriends);

app.listen( port, () => {
    console.log('Server is running on port:', port);    
});