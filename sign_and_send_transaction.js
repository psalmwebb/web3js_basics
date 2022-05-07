
require('dotenv').config();

const Tx = require("@ethereumjs/tx").Transaction;
const Common = require('@ethereumjs/common').default;

const Web3 = require('web3');


const web3 = new Web3(process.env.rinkebyTestNet);

const account1 = "0x48efe42F0B1b9045e5bE12B46E2fFd5180C13730";

const account2 = "0x060CE6531fF3C5A7CA0bcC679B2A4F204d2AA83D";

const account1PrivateKey = Buffer.from(process.env.account1PrivateKey,'hex');


const common = new Common({chain:"rinkeby"});


web3.eth.getTransactionCount(account1)
.then(transactionCount =>{
    const txObject = {
        to: account2,
        nonce:web3.utils.toHex(transactionCount),
        gasLimit:web3.utils.toHex(21000),
        gasPrice:web3.utils.toHex(web3.utils.toWei('1','gwei')),
        value:web3.utils.toHex(web3.utils.toWei('1','ether'))
    }

    const tx = new Tx(txObject,{common});

    const signedTx = tx.sign(account1PrivateKey);

    
    web3.eth.sendSignedTransaction('0x' + signedTx.serialize().toString('hex'))
    .then(txHash =>{
         
        console.log(txHash);
    })
})





