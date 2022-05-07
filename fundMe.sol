// SPDX-License-Identifier: MIT 

pragma solidity ^0.6.0;

contract FundMe{

    address public owner;

    constructor() public{
       owner = msg.sender;
    }

    function withdraw(uint256 amount) public {

        msg.sender.transfer(amount);
    }

    function getBalance() public view returns(uint256){
      
       return address(this).balance;
    }

    receive() external payable{

    }
}