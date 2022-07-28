import amqplib from 'amqplib';
import {rabbitmqConfig} from "../config/config";


const queue = process.env.QUEUE_NAME;

async function getFundRequests(): Promise<void> {
    try {
        const connection = await amqplib.connect(rabbitmqConfig);
        console.log('Connection established....');

        const channel = await connection.createChannel();
        console.log('Channel created....');

        await channel.assertQueue(queue);
        console.log('Queue is set!');

        channel.consume(queue, (data) => {
            if (data !== null) {
                console.log('Received:', JSON.stringify(data.content));
                channel.ack(data);
            } else {
                console.log('Consumer cancelled by server');
            }
        });
    } catch (err) {
        console.error(err);
    }
};




export {
    getFundRequests,
}
