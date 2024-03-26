const {
    Connection,
	PublicKey,
	clusterApiUrl,
	Keypair, //allows us to create a new wallet
	LAMPORTS_PER_SOL
} = require("@solana/web3.js");

// Constants
const MAX_AIRDROPS_PER_DAY = 10; // Maximum number of airdrops allowed per day
const AIRDROP_INTERVAL_MS = 24 * 60 * 60 * 1000 / MAX_AIRDROPS_PER_DAY; // Time interval between airdrops in milliseconds

//create a wallet - the object that will be airdroppig solana
const wallet = new Keypair();

//public key to receive 
const publicKey = new PublicKey(wallet._keypair.publicKey);
//secret key to send -- needs to be kept secret
const secretKey = wallet._keypair.secretKey;

//log the keys
	//console.log(publicKey)
	// console.log(secretKey)

// Define a constant for the confirmation strategy
const confirmationStrategy = 'confirmed';

//see the balance in the wallet making an assyncronous "API" call
const getWalletBallance = async() => {
	try {
		// clusterApiUrl('devnet') if you want a replica of Solana's mainnet to tryout new features
		const connection = new Connection(clusterApiUrl('devnet'), confirmationStrategy);
		const walletBallance = await connection.getBalance(publicKey);

		console.log(`Wallet ballance is ${walletBallance}`);
	} catch(err) {
		console.log(err);
	}
}

// Counter for tracking the number of airdrops
let airdropCount = 0;
// Function to wait for a specified amount of time
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//receice 2 SOL 
const airDropSol = async() => {
	try {
		const connection = new Connection(clusterApiUrl('devnet'), confirmationStrategy);

		// Check if the maximum number of airdrops per day has been reached
        if (airdropCount >= MAX_AIRDROPS_PER_DAY) {
            console.log("Maximum daily airdrop limit reached. Please try again later.");
            return;
        }
		const fromAirDropSignature = await connection.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL);

		await connection.confirmTransaction(fromAirDropSignature, confirmationStrategy);
		// Increment the airdrop count
		airdropCount++;
		// Wait for the specified interval before allowing the next airdrop
		await wait(AIRDROP_INTERVAL_MS);
	} catch (err) {
		console.log(err);
	}
}
//function that actually runs the code
const main = async() => {
	await getWalletBallance();
	await airDropSol();
	await getWalletBallance();
}

main();