import amqplib from 'amqplib';

const rabbitmqConfig = {
    protocol: process.env.RABBIT_PROTOCOL,
    hostname: 'localhost',
    port: 5672,
    username: process.env.RABBIT_USERNAME,
    password: process.env.RABBIT_PAASSWORD,
    vhost: '/',
    authMechanism: ['PLAIN', 'AMQPLAIN', 'EXTERNAL']
}

const queue = 'zeemo';

async function publishBilling(data): Promise<void> {
    try {
        const connection = await amqplib.connect(rabbitmqConfig);
        console.log('Connection established....');

        const channel = await connection.createChannel();
        console.log('Channel created....');


        await channel.assertQueue(queue);
        console.log('Queue is set!')

        console.log('Sending: ' +JSON.stringify(data) +' to blueSalt');

        channel.sendToQueue(queue, Buffer.from(data.toString()));
    } catch (err) {
        console.error(err);
    }
};

export {
    publishBilling,
}
