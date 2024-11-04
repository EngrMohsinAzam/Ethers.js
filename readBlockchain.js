// testEthers.js

const { ethers } = require('ethers');

console.log('Ethers.js version:', ethers.version);

try {
    const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/8c7efe3441724ef09b985af726a846c1');
    console.log('JsonRpcProvider initialized successfully!');
    
    // Test the provider by fetching the current block number
    provider.getBlockNumber().then((blockNumber) => {
        console.log('Current block number:', blockNumber);
    }).catch((error) => {
        console.error('Error fetching block number:', error);
    });

} catch (error) {
    console.error('Error initializing provider:', error);
}
