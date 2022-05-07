const Web3 = require("web3");

require("dotenv").config();

const web3 = new Web3();



async function getBalanceFromAcc(address){

    const balance = await web3.eth.getBalance(address);

    console.log(web3.utils.fromWei(balance,'ether')); // convert wei to ether
}


getBalanceFromAcc("0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5");