
const TronWeb = require('tronweb');

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.trongrid.io');
const solidityNode = new HttpProvider('https://api.trongrid.io');
const eventServer = new HttpProvider('https://api.trongrid.io');

const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
);


async function getBlockTransactions(blockNumber) {
    let block = await tronWeb.trx.getBlockByNumber(blockNumber);
    let transactions = block.transactions;

    console.log(`Block: ${blockNumber}`);
    console.log(`Number of Transactions: ${transactions.length}`);
    console.log('Transactions:');



    for (const transaction of transactions) {
        if (transaction.raw_data.contract[0].type === 'TransferContract') {
            const fromAddress = tronWeb.address.fromHex(transaction.raw_data.contract[0].parameter.value['owner_address']);
            const toAddress = tronWeb.address.fromHex(transaction.raw_data.contract[0].parameter.value['to_address']);
            const value = tronWeb.fromSun(transaction.raw_data.contract[0].parameter.value.amount);
            const transactionID = transaction.txID;
            
            console.log('From Address:', fromAddress);
            console.log('To Address:', toAddress);
            console.log('Value:', value);
            console.log('Transaction ID:', transactionID);
            console.log('\n');
            
    
        }
    }
}

getBlockTransactions(48444614);
