const fs = require('fs');

// reading files
fs.readFile('./docs/blog.txt', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})

// writing files
fs.writeFile('./docs/blog.txt', "Hello, World", (err) => {
    if(err)
        throw err;
    console.log("file was written");
})

// directories

// The fs.existsSync() method is used to synchronously check if a file/folder already exists in the given path or not. It returns a boolean value 
if(!(fs.existsSync('./docs/assets'))){
    fs.mkdir('./docs/assets', (err) => {
        if(err)
            throw err
        console.log('folder created');
    })    
}else{
    fs.rmdir('./docs/assets', (err) => {
        if(err)
            throw err
        console.log('folder deleted');
    }) 
}


// deleting file
if(fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt', (err) => {
        if(err)
            throw err;
        console.log('file has been removed');
    })
}else{
    fs.writeFile('./docs/blog2.txt', "Hello, again", (err) => {
        if(err)
            throw err;
        console.log("file was written");
    })
}