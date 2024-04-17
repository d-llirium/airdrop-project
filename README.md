# Airdrop Program

## What is as AirDrop program

Airdropping means you create SOLANA currency [SOL] and send it to your own wallet. [but it will be fake]

Use **fake** SOL to:

- **test** out features of Solana
- and **develop fully-fledged** Solana applications **without having to spend real money**.


## What is solana wallet

A **Solana Wallet is a program** for sending and receiving solar in a currency, interacting with the Salona Blockchain.

**SOLANA wallet** is a bit like an **email address** if you want to send or receive an email, you need an email account. If you want to send or receive solar on a currency, you need a solar and a wallet. If other people have your email address, they can send you emails.

**EMAIL | SOLANA WALLET**

- email address | public key

- password | secret key

- send/receive emails | send/receive SOL

You shouldn't share your email password with anyone. Likewise, if you share your Solana wallet's secret key with someone, they can send money out of your

SOLANA and wallets, and there's a good chance you're going to get robbed of all your money.


# **Pre-requisites:**

- experience in **JavaScript**.
- An IDE of your choice: My IDE of choice is Visual Studio Code, which you can download from [this link here](https://code.visualstudio.com/download). However, if you're already familiar with another IDE then feel free to use that instead.
- Node and NPM: You can easily download Node and NPM from [this website](https://nodejs.org/en/download/). Once downloaded, just go through the installer and you should be all set.

## **set up our development environment with a functioning Web3.js installation.**

- open a new window in **terminal**
  ```
  #create a new folder called airdrop-project
  mkdir airdrop-project
  
  #get inside the folder
  cd airdrop-project
  
  #start a new node project inside the airdrop-project folder
  npm init -y
  
  #output: creates a file to keep track of all the node packages 
  #that will be used on our project
  Wrote to /Users/user/airdrop-project/package.json:
  
  {
    "name": "airdrop-project",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }
  
  #install solana/web3.js package on package.json
  npm install --save @solana/web3.js
  ```

- Open the AirDrop Project folder on **VScode** and create a new file called **index.js** > that's where all the program will be written
- open a new window in **terminal**
  ```
  #to run the program
  node index.js
  ```
