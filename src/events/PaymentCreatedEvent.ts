import { ExchangeNames, ExchangeTypes, QueueNames, RoutingKeys } from "./subjects";
export interface PaymentCreatedEvent {
    exchangeName: ExchangeNames;
    exchangeType: ExchangeTypes;
    routingKey: RoutingKeys;
    queueName: QueueNames;
    data: {
        id: string;
        orderId: string;
        paymentId: string;
        numTransaccion: { [key: string]: string };
        Iidentificadordeuda: string;
        status: { [key: string]: string };
        version?: number;
    };
}