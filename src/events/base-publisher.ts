import { Channel } from "amqplib";
import { ExchangeNames, ExchangeTypes, RoutingKeys } from "./subjects";

interface Event {
    exchangeName: ExchangeNames;
    exchangeType: ExchangeTypes;
    routingKey: RoutingKeys;
    data: any;
}
export abstract class Publisher<T extends Event> {
    abstract exchangeName: T["exchangeName"];
    abstract exchangeType: T["exchangeType"];
    abstract routingKey: T["routingKey"];
    protected channel!: Channel;
    constructor(channel: Channel) {
        this.channel = channel;
    }
}
