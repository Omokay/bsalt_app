import mongoose from "mongoose";
import 'dotenv/config'

const mongoUri = process.env.customers_connection_string_dev;


export async function mongoConnect() {
    return mongoose
        .connect(mongoUri, {
            autoCreate: true,
            autoIndex: true,
        })
}

async function mongoDisconnect() {
    return await mongoose.disconnect();
}



mongoose.connection.once('open', () => {
    console.log('[Customer Service]: Connection to DB is live');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});
