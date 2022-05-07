require('dotenv').config();
const Web3 = require("web3");

const web3 = new Web3(process.env.rinkebyTestNet);

const account1PrivateKey = process.env.account1PrivateKey;
const account1 = process.env.account1;

const account2PrivateKey = process.env.account2PrivateKey;
const account2 = process.env.account2;

web3.eth.getTransactionCount(account2).then(async (transactionCount)=>{
    console.log(transactionCount);

    let txObject = {
        to:account1,
        nonce:transactionCount,
        gasLimit:1000000,
        value:web3.utils.toWei('3','ether'),
        gasPrice:await web3.eth.getGasPrice(),
        chainId:await web3.eth.getChainId(),
    }


    web3.eth.accounts.signTransaction(txObject,account2PrivateKey)
    .then( async ({rawTransaction})=>{
        
        const txObject = await web3.eth.sendSignedTransaction(rawTransaction);

        console.log(txObject);

    })

})
