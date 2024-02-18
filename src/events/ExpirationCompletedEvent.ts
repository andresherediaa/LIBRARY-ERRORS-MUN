import {
    ExchangeNames,
    ExchangeTypes,
    QueueNames,
    RoutingKeys,
} from "./subjects";
export interface ExpirationCompletedEvent {
    exchangeName: ExchangeNames;
    exchangeType: ExchangeTypes;
    routingKey: RoutingKeys;
    queueName: QueueNames;
    data: {
        orderId: string;
    };
}
