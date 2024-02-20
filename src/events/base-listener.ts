import { connect, Channel, Connection, ConsumeMessage } from "amqplib";

interface ListenerData<T> {
    data: T;
}
export abstract class Listener<T extends ListenerData<T["data"]>> {
    private connection!: Connection;
    private channel!: Channel;
    private exchangeName: string;
    private exchangeType: string;
    private queueName: string;
    private routingKey: string;

    abstract onMessage(data: T["data"], msg: ConsumeMessage, channel: Channel): void;

    constructor(
        exchangeName: string,
        exchangeType: string,
        queueName: string,
        routingKey: string
    ) {
        this.exchangeName = exchangeName;
        this.exchangeType = exchangeType;
        this.queueName = queueName;
        this.routingKey = routingKey;
    }

    async connect() {
        this.connection = await connect(process.env.MESSAGE_BROKER_URL!);
        this.channel = await this.connection.createChannel();
        await this.channel.assertExchange(
            this.exchangeName,
            this.exchangeType,
            { durable: false }
        );

        const { queue } = await this.channel.assertQueue(this.queueName, {
            exclusive: false,
        });
        console.log(`Listening for messages on queue: ${queue}`);

        // Bind the queue to the exchange with a routing key
        this.channel.bindQueue(queue, this.exchangeName, this.routingKey);

        this.channel.consume(queue, async (msg) => {
            if (msg) {
                const data: T["data"] = JSON.parse(msg.content.toString());
                this.onMessage(data, msg, this.channel);
            }
        });
    }

    async close() {
        await this.channel.close();
        await this.connection.close();
    }
}
