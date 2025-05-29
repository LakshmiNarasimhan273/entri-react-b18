// fs - File system

const fs = require("fs");

// Step-1 - File creation and write
// fs.writeFile('testReport.txt', 'Test commands successfull', (err) => {
//     if(err){
//         console.error("Wrinting error");
//         return;
//     }
//     console.log("File written successfull");
// })

// Step-2 Read the same file
// fs.readFile('testReport.txt', 'utf8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);    
// });

// 2 OS module

const os = require("os");

console.log("Windows architecture",os.arch());

console.log("Total system memory", (os.totalmem()/(1024**3)).toFixed(2));

console.log("Free memory", (os.freemem()/(1024**3)).toFixed(2));

console.log("Hours of time used", (os.uptime()/3600).toFixed(2));

console.log("CPU Info", os.cpus());

console.log("Home directory", os.homedir());

console.log("Hostname", os.hostname());




