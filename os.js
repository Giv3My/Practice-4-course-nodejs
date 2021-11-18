const os = require('os');

console.log("Операционая система: ", os.platform());

console.log("Архитектура процессора:", os.arch());

console.log("Свободной памяти:", os.freemem());

console.log("Всего памяти:", os.totalmem());

console.log("Компьютер включен:", os.uptime(), "мс");