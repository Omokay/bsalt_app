import mongoose from "mongoose";
import 'dotenv/config'


const mongoUri = process.env.connection_string_dev;


export async function mongoConnect() {
    await mongoose
        .connect(mongoUri, {
            autoCreate: true,
            autoIndex: true,
        });

    const connection = mongoose.connection;
    return connection;
}

async function mongoDisconnect() {
    return await mongoose.disconnect();
}

mongoose.connection.once('open', () => {
    console.log('[Billing Service]: Connection to DB is live');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

