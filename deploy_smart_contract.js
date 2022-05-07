require("dotenv").config();
const fundMeContractByteCode = require('./fundMe_contract_bytecode.json');

const Web3 = require("web3");
const web3 = new Web3('HTTP://127.0.0.1:7545');


const account1 = process.env.ganacheAccount1;

const account1PrivateKey = process.env.ganacheAccount1PrivateKey;


web3.eth.getTransactionCount(account1)
.then( async (txCount)=>{

    let txObject = {
       nonce:txCount,
       data:fundMeContractByteCode['object'],
       gasPrice:await web3.eth.getGasPrice(),
       gasLimit:1000000,
       chainId:await web3.eth.getChainId()
    }


    let {rawTransaction} = await web3.eth.accounts.signTransaction(txObject,account1PrivateKey);

    let txReceiptObect = await web3.eth.sendSignedTransaction(rawTransaction);

    console.log(txReceiptObect);
})


