require("dotenv").config();

const Web3 = require("web3");
const fundMeContractABI = require("./fundMe_contract_abi.json");

const web3 = new Web3('HTTP://127.0.0.1:7545');

const account1 = process.env.ganacheAccount1;

const account1PrivateKey = process.env.ganacheAccount1PrivateKey;

// const fundMeContract = new web3.eth.Contract(fundMeContractABI,process.env.myFundMeContractAddress);


web3.eth.getTransactionCount(account1)
.then(async (txCount)=>{
    let txObject = {
        nonce:txCount,
        value:web3.utils.toWei('2','ether'),
        gasPrice:await web3.eth.getGasPrice() + 30,
        chainId:await web3.eth.getChainId(),
        to:process.env.ganacheFundMeContractAddress,
        gasLimit:50000
    }

    const {rawTransaction} = await web3.eth.accounts.signTransaction(txObject,account1PrivateKey);

    const txReceipt = await web3.eth.sendSignedTransaction(rawTransaction);

    console.log(txReceipt);

})

// fundMeContract.methods.getBalance().call()
// .then(balance=>{
//     console.log(balance);
// })

