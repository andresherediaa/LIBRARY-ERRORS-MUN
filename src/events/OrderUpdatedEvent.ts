import { OrderStatus } from "..";
import {
    ExchangeNames,
    ExchangeTypes,
    QueueNames,
    RoutingKeys,
} from "./subjects";

interface CartItem {
    [key: string]: any;
}

interface Titulo {
    titulo: string;
    anio: number;
    rubro: string;
}
export interface OrderUpdatedEvent {
    exchangeName: ExchangeNames;
    exchangeType: ExchangeTypes;
    routingKey: RoutingKeys;
    queueName: QueueNames;
    data: {
        id: string;
        status: OrderStatus;
        userId: string;
        expiresAt?: Date;
        version: number;
        cart?: CartItem[];
        paymentMethod: string;
        numTransaccion: string;
        totalDeuda: number;
        isPaid?: boolean;
        paidAt?: Date;
        isDelivered?: boolean;
        deliveredAt?: Date;
    };
}

export {};
