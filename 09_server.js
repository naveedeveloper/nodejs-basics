const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');
    res.write(`<h1>Request URL: ${req.url}</h1>`);
    res.write(`<h1>Request method: ${req.method}</h1>`);
    res.end();
});

server.listen(3000, () => {
    console.log('server is listening!');
});