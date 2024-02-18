import { ExchangeNames, ExchangeTypes, QueueNames, RoutingKeys } from "./subjects";

export interface PaymentCreatedEvent {
    exchangeName: ExchangeNames;
    exchangeType: ExchangeTypes;
    routingKey: RoutingKeys;
    queueName: QueueNames;
    data: {
        id: string;
        orderId: string;
        paymnetId: string;
        version?: number;
    };
}