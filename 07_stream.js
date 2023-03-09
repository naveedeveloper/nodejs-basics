/*

if files are very large, then it would take a long time to read them
we have to wait before its been fully loaded
So, By using streams we can get rid of this.
Small amount of data as package send to client known as buffer.

*/

const fs = require('fs');
const { pipeline } = require('stream');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('------- NEW CHUNK --------');
//     console.log(chunk);
//     writeStream.write('\n NEW CHUNK \n')
//     writeStream.write(chunk);
// });

//piping
// same as above
readStream.pipe(writeStream);
