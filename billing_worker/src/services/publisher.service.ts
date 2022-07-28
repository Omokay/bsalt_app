import amqplib from 'amqplib';
import {rabbitmqConfig} from "../config/config";


const queue = process.env.QUEUE_NAME;

async function pushBillUpdate(data): Promise<void> {
    try {
        const connection = await amqplib.connect(rabbitmqConfig);
        console.log('Connection established....');

        const channel = await connection.createChannel();
        console.log('Channel created....');


        await channel.assertQueue(queue);
        console.log('Queue is set!')

        console.log('Sending: ' +JSON.stringify(data) +' to zemoQueue');
        channel.sendToQueue(queue, Buffer.from(data.toString()));
    } catch (err) {
        console.error(err);
    }
};

export {
    pushBillUpdate,
}
