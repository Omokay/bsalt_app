import http from 'http';
import {app} from './app';
import {mongoConnect} from "./models/customers.connect";
import {seedDatabase} from "./models/customers.seed";
import mongoose from "mongoose";

const server = http.createServer(app);
const PORT = process.env.PORT || 1010;


async function startServer(){
    try {
        await mongoConnect();
    } catch (err) {
        throw new Error ('Error connecting the database');
    }
    await seedDatabase();
    server.listen(PORT, () => {
        console.log(`[Customer Service]: Server is live and listening on port: ${PORT}...`);
    })
}


startServer();


