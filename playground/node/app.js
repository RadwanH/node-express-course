const os = require('os');
console.log(os.platform());


// info about current user
const user = os.userInfo();
console.log(user);




// method returns the system uptime in seconds
console.log(os.uptime()+ 'seconds ');


// info about os 
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);