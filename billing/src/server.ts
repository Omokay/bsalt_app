import http from 'http';
import {app} from './app';
import {mongoConnect} from "./models/billing.connect";

const server = http.createServer(app);
const PORT = process.env.PORT || 4040;

async function startServer(){
    try {
       await mongoConnect();
    } catch(err) {
        throw new Error('Error connecting to the database');
    }
    server.listen(PORT, () => {
        console.log(`[Billing Service]: Server is live and listening on port: ${PORT}...`);
    })
}


startServer();



