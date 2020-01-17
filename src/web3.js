import Web3 from 'web3';

// create an instance of web3(version 1) and attach a provider that metamask puts in to the browser by default
const web3 = new Web3(window.ethereum);

window.ethereum.enable();
export default web3;