const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // set header content type
    res.setHeader('content-type', 'text/html');
    
    let path = './views';

    switch(req.url){
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }

    //send an html file
    fs.readFile(path, (err, data) => {
        if(err)
            throw err;
        else
            res.end(data);
    })
});

server.listen(3000, () => {
    console.log('server is listening!');
});