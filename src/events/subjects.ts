export enum RoutingKeys {
    ProductCreated = "product:created",
    ProductUpdated = "product:updated",
    ProductDeleted = "product:deleted",
    OrderCreated = "order:created",
    OrderUpdated = "order:updated",
    ExpirationCompleted = "expiration:completed",
    PaymentCreated = "payment:created",
}

export enum ExchangeNames {
  exchangeName = "billetera:bus"
}

export enum ExchangeTypes {
    Direct = "direct",
    Topic = "topic",
    Default = "default",
    Fanout = "fanout",
}

export enum QueueNames {
  OrderQueue = 'order:Queue',
  PaymentQueue = 'payment:Queue',
  DeudasQueue = 'deudas:Queue',
  ConsultasQueue = 'consultas:Queue'
}
