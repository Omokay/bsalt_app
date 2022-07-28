import express from "express";
import {Billing} from '../../models/billing.schema';
import { v4 as uuidv4 } from 'uuid';

async function postBill(req: express.Request, res: express.Response, next: express.NextFunction) {
    const { amount, balance, customer_id, transaction_type, wallet_id, status} = req.body;

    const transaction_id = uuidv4();

    ['amount', 'customer_id', 'transaction_type', 'wallet_id'].forEach((item) => {
        if (!req.body[item]) {
            return res.status(400).json({
                error: 'Missing required parameters...'
            })
        }
    })


    const billing = new Billing({
        amount,
        balance,
        customer_id,
        transaction_id,
        transaction_type,
        wallet_id,
        status
    });
    await billing.save();

    return res.status(200).json({
        amount,
        balance,
        customer_id,
        transaction_id,
        transaction_type,
        wallet_id,
        "status": "Pending"
    })
}



export {
    postBill,
}
