import express from 'express';
import {postBill} from './billing.controller';


const billingRouter = express.Router();

billingRouter.post('/fund', postBill);



export {
    billingRouter,
}
