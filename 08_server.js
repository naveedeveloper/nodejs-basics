const http = require('http');
const server = http.createServer((req, res) => {
    console.log('Request made');
}); 

server.listen(3000, () => {
    console.log('server is listening!'); 
});