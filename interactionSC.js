const { ethers } = require('ethers');

const provider = new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/8c7efe3441724ef09b985af726a846c1');
console.log('JsonRpcProvider initialized successfully!');

const walletAddress = "0xb2357e030ce7c463006f8a8a5f89e09821341324";
const walletAbi = [
    {
        "inputs": [],
        "name": "sendEthContract",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "sendEthUser",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_num",
                "type": "uint256"
            }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "accountBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "constantBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getValue",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

 const contractInteraction = async () => {
   const walletContract = new ethers.Contract(walletAddress, walletAbi, provider);

   try {
         const contractName = await walletContract.name();
         console.log("Contract Name:", contractName);

       const num = await walletContract.getValue();
      console.log('Number value:', num.toString());

        const contractBalance = await walletContract.constantBalance();
        console.log('Contract Balance:', ethers.formatEther(contractBalance));

        const userBalance = await walletContract.accountBalance("0xa7acb38EE136642051F947194f37504c087c602c");
        console.log('User Balance:', ethers.formatEther(userBalance));
   } catch (error) {
        console.error('Error interacting with the contract:', error);
  }
 };

contractInteraction();