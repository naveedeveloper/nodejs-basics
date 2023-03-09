/*
As, in javascript window is the global object(every method comes under window object hood).
in node.js "global" is the global object. 
*/

// console.log(global);

// setTimeout() can be used to schedule code execution after a designated amount of milliseconds.

global.setTimeout(() => {
    console.log("in the timeout");
}, 3000);

// If there is a block of code that should execute multiple times, setInterval() can be used to execute that code. 

const interval = global.setInterval(() => {
    console.log('in the interval');
}, 1000)

// By passing said object into the respective clear function, execution of that object will be halted completely.
setTimeout(() => {
    console.log("in the second timeout");
    clearInterval(interval)
}, 3000);
