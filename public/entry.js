require("./style.css");

// accept hot module replacement
module.hot.accept();

var monModule = require('./monModule');

var module1 = new monModule();

document.getElementById('app').innerHTML = module1.bonjour();
document.getElementById('app').innerHTML += '<br>';
document.getElementById('app').innerHTML += module1.auRevoir();
