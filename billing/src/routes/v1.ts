import express from 'express';
import {billingRouter} from './billing/billing.route';

const api_v1 = express.Router();

api_v1.use('/billing', billingRouter);

export {
    api_v1,
}
