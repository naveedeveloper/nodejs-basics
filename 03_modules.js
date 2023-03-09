// modules use to split code into different files and we can import and export to and from those files

// const people = require('./module1');

// When we require another file, node looks for that file and it runs that file 

// console.log(people) 
// empty object, reason is that when we import a file it does not give us the access to the things in that file




const {people, ages} = require('./04_module1');

console.log(people) 
console.log(ages) 