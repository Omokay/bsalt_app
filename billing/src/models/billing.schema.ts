import mongoose from 'mongoose';

interface IBilling {
    amount: Number;
    balance: Number;
    customer_id: String,
    transaction_id: String,
    transaction_type: String,
    wallet_id: String,
    status: 'Pending' | 'Success' | 'Failed'
}

interface billingModelInterface extends mongoose.Model<BillingDoc> {
    build(attr: IBilling): BillingDoc
}

interface BillingDoc extends mongoose.Document {
    amount: Number;
    balance: Number;
    customer_id: String,
    transaction_id: String,
    transaction_type: String,
    wallet_id: String,
    status: 'Pending' | 'Success' | 'Failed'
}


const BillingSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
        default: 0,
    },
    customer_id: {
        type: String,
        required: true,
    },
    transaction_id: {
        type: String,
        required: true,
        unique: true,
    },
    transaction_type: {
        type: String,
        required: true
    },
    wallet_id: {
        type: String,
        required: true,

    },
    status: {
        type: String,
        enum: ['Success', 'Failed', 'Pending'],
        default: 'Pending',
        required: true,
    }
});

const Billing = mongoose.model<BillingDoc, billingModelInterface>("Billing", BillingSchema);


export {
    Billing
}
