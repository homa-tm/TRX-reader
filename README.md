
# TRON Transactions Analyzer

This code analyzes transactions on the TRON blockchain and separates them into two categories: USDT transactions and TRX transactions.

## Prerequisites

Before running the code, make sure you have installed the following dependencies:

- Node.js
- Axios (`npm install axios`)

## Usage

Run the following command in the terminal:
node main.js

The code will analyze the block number `48478788` and print the following information:

- Block number
- Number of transactions in the block
- Transactions: an object with the following properties:
  - `USDT_transactions`: an array of transactions that involve USDT tokens
  - `TRX_transactions`: an array of transactions that involve TRX tokens
  - `block_number`: the block number being analyzed

Each transaction object has the following properties:

- `transaction_id`: the transaction ID
- `from`: the address of the sender
- `to`: the address of the recipient
- `value`: the amount of TRX or USDT transferred in the transaction

## Conclusion

This code demonstrates how to use the TRON Grid API to analyze transactions on the TRON blockchain and categorize them based on the type of token involved. The code uses the Axios library to make HTTP requests to the API and processes the response data to extract the relevant information.


## Txid of trx to my Tronlink wallet 
36a53ed48ab38fd3ef50ea3643498a3cdc1f3cc77d0082264213f73c453d68cc

# trx block number
48444614
