import { connect, Channel, Connection } from "amqplib";

interface Event {
    routingKey: string;
    data: any;
}

export class OrderUpdatedPublisher {
    private connection!: Connection;
    private channel!: Channel;
    private exchangeName: string;
    private exchangeType: string;

    constructor(exchangeName: string, exchangeType: string) {
        this.exchangeName = exchangeName;
        this.exchangeType = exchangeType;
    }

    async connect(url: string) {
        this.connection = await connect(url); //process.env.MESSAGE_BROKER_URL!
        this.channel = await this.connection.createChannel();
        await this.channel.assertExchange(
            this.exchangeName,
            this.exchangeType,
            {
                durable: false,
            }
        );
    }

    async publish(event: Event) {
        await this.channel.publish(
            this.exchangeName,
            event.routingKey,
            Buffer.from(JSON.stringify(event.data))
        );
        console.log(`Event published - Routing Key: ${event.routingKey}`);
    }

    async close() {
        await this.channel.close();
        await this.connection.close();
    }
}
