import './App.css';
import { useEffect } from 'react';
import { ethers } from 'ethers';

const App = () => {
  const walletAddress = "0xb2357e030ce7c463006f8a8a5f89e09821341324";

  useEffect(() => {
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

    const writeContract = async () => {
      try {
        if (!window.ethereum) {
          throw new Error('No crypto wallet found. Please install it.');
        }

        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(walletAddress, walletAbi, signer);

        console.log('Attempting to set value...');
        const tx = await contract.setValue(3);
        console.log('Transaction sent:', tx);
        await tx.wait();
        console.log('Transaction confirmed:', tx);
      } catch (error) {
        console.error('Error during contract interaction:', error);
      }
    };

    writeContract();
  }, []);

  return (
    <div className='App'>
      {/* Your JSX here */}
    </div>
  );
};

export default App;
