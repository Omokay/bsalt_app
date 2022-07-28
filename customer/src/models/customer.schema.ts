import mongoose, {Schema} from 'mongoose';


interface ICustomer {
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    walletId: String,
    balance: Number
}

interface customerModelInterface extends mongoose.Model<CustomerDoc> {
    build(attr: ICustomer): CustomerDoc,
}

interface CustomerDoc extends mongoose.Document {
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    walletId: String,
    balance: Number
}
const CustomerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
        unique: true,
    },
    walletId: {
        type: String,
        unique: true,
    },
    balance: {
        type: Number,
        default: 0,
    }
});

const Customer = mongoose.model<CustomerDoc, customerModelInterface>("Customer", CustomerSchema);
export {
    Customer
}
