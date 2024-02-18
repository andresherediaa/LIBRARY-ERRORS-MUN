import { Channel } from "amqplib";
import {
    ExchangeNames,
    ExchangeTypes,
    QueueNames,
    RoutingKeys,
} from "./subjects";

interface Event {
    exchangeName: ExchangeNames;
    exchangeType: ExchangeTypes;
    queueName: QueueNames;
    routingKey: RoutingKeys;
    data: any;
}

export abstract class Listener<T extends Event> {
    protected exchangeName: T["exchangeName"];
    protected exchangeType: T["exchangeType"];
    protected queueName: T["queueName"];
    protected routingKey: T["routingKey"];
    protected channel: Channel;
    abstract onMessage(data: T["data"]): void;

    constructor(
        channel: Channel,
        exchangeName: ExchangeNames,
        exchangeType: ExchangeTypes,
        queueName: QueueNames,
        routingKey: RoutingKeys
    ) {
        this.channel = channel;
        this.exchangeName = exchangeName;
        this.exchangeType = exchangeType;
        this.queueName = queueName;
        this.routingKey = routingKey;
    }
    async listen() {
        await this.channel.assertExchange(
            this.exchangeName,
            this.exchangeType,
            {
                durable: false,
            }
        );
        await this.channel.assertQueue(this.queueName, { durable: false });
        await this.channel.bindQueue(
            this.queueName,
            this.exchangeName,
            this.routingKey
        );

        this.channel.consume(this.queueName, (msg) => {
            if (msg) {
                const parsedData = this.parseMessage(msg);
                this.onMessage(parsedData);
            }
        });
    }

    parseMessage(msg: any) {
        const data = msg.content.toString();
        return JSON.parse(data);
    }
}
