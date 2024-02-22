export enum RoutingKeys {
    OrderCreated = "key_order_created",
    OrderUpdated = "key_order_updated",
    PaymentCreated = "key_payment_created",
    ExpirationCompleted = "key_expiration_completed",
    Empty = "",
}

export enum ExchangeNames {
    exchangeName = "billetera_bus",
}

export enum ExchangeTypes {
    Direct = "direct",
    Topic = "topic",
    Default = "default",
    Fanout = "fanout",
}

export enum QueueNames {
    OrderCreated = "order_created",
    OrderUpdated = "order_updated",
    PaymentCreated = "payment_created",
    PaymentUpdated = "payment_updated",
    ExpirationCompleted = "expiration_completed",
}

export enum Instituciones {
    ETAPA = "ETAPA",
    MUNICIPIO = "MUNICIPIO"
}
