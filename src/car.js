import web3 from './web3';

const address = '0x86F8F3592f4f126ee54B49D8cc32DAe256125059';
const abi = [{"constant":true,"inputs":[],"name":"agreedCost","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"setOwner","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"money","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"constructor"}];
// export a local copy of the contract that refers to the original contract in the blockchain
// this is a portal to the contract that actually exists in the blockchain
export default new web3.eth.Contract(abi, address);