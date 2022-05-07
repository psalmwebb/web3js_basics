

const Web3 = require("web3");

const web3 = new Web3('HTTP://127.0.0.1:7545');



console.log(web3.eth.accounts.create());