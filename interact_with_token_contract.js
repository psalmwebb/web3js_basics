const Web3 = require("web3");

const web3 = new Web3('https://mainnet.infura.io/v3/9baec12392ca418689394b6c02c230f7')


const contractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

const contract_abi = require('./tetherUSD_contract_abi.json')


const contract = new web3.eth.Contract(contract_abi,contractAddress);

const tokenHolderAddress = "0x6f991C7Bc5f40A2e7F559F0DFa7407c8237DCCa8";
// contract.methods.name().call()
// .then(name=>{
//     console.log(name);  // Tether USD
// })


// contract.methods.symbol().call()
// .then(symbol=> console.log(symbol)); // USDT


// contract.methods.totalSupply().call()

// .then(totalSupply=> console.log(totalSupply));



contract.methods.balanceOf(tokenHolderAddress).call()
.then(balance => console.log(balance));