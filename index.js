const {
    Connection,
	PublicKey,
	clusterApiUrl,
	Keypair, //allows us to create a new wallet
	LAMPORTS_PER_SOL
} = require("@solana/web3.js")

//create a wallet - the object that will be airdroppig solana
const wallet = new Keypair()

//public key to receive 
const publicKey = new PublicKey(wallet._keypair.publicKey)
//secret key to send -- needs to be kept secret
const secretKey = wallet._keypair.secretKey

//log the keys
	//console.log(publicKey)
	// console.log(secretKey)

// Define a constant for the confirmation strategy
const confirmationStrategy = 'confirmed';

//see the balance in the wallet making an assyncronous "API" call
const getWalletBallance = async() => {
	try {
		// clusterApiUrl('devnet') if you want a replica of Solana's mainnet to tryout new features
		const connection = new Connection(clusterApiUrl('devnet'), confirmationStrategy)
		const walletBallance = await connection.getBalance(publicKey)

		console.log(`Wallet ballance is ${walletBallance}`)
	} catch(err) {
		console.log(err)
	}
}
//receice 2 SOL 
const airDropSol = async() => {
	try {
		const connection = new Connection(clusterApiUrl('devnet'), confirmationStrategy)
		const fromAirDropSignature = await connection.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL)

		await connection.confirmTransaction(fromAirDropSignature, confirmationStrategy)
	} catch (err) {
		console.log(err)
	}
}
//function that actually runs the code
const main = async() => {
	await getWalletBallance()
	await airDropSol()
	await getWalletBallance()
}

main()