export enum RoutingKeys {
    OrderCreated = "order:created",
    OrderUpdated = "order:updated",
    PaymentCreated = "payment:created",
    ExpirationCompleted = "expiration:completed",
    Empty = "",
}

export enum ExchangeNames {
    exchangeName = "billetera:bus",
}

export enum ExchangeTypes {
    Direct = "direct",
    Topic = "topic",
    Default = "default",
    Fanout = "fanout",
}

export enum QueueNames {
    OrderCreated = "order:created",
    OrderUpdated = "order:updated",
    PaymentCreated = "payment:created",
    PaymentUpdated = "payment:created",
    ExpirationCompleted = "expiration:completed",
}
