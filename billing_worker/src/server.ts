import {pushBillUpdate} from "./services/publisher.service";
import {getFundRequests} from "./services/consumer.service";

console.log('This is a just worker.....No need to expose a port');

// After getting fund requests
const sampleData = {
    "amount": 5000,
    "balance": 60000,
    "customer_id": "443456789",
    "transaction_id": "0af52162-4a20-4086-9e01-bd57fd98e451",
    "transaction_type": "topup",
    "wallet_id": "vda470291",
    "status": "Pending"
}

async function initiateWorker() {
    updateTransaction(sampleData);
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve("Transaction Successful"), 200);
    });
}



setInterval(() => {
    initiateWorker();
}, 500)


