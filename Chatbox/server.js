const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res)=> res.send('Hello TestyCodeiz Server!'));

io.on('conection', (socket)=> {
    console.log('Some User is conected');
})

http.listen(3000, ()=> {
    console.log('Listening On *:3000')
})