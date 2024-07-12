export enum RoutingKeys {
    OrderCreated = "key_order_created",
    OrderUpdated = "key_order_updated",
    PaymentCreated = "key_payment_created",
    ExpirationCompleted = "key_expiration_completed",
    PrivacyTermsUpdated = "key_privacy_terms_updated",
    PrivacyTermsCreated = "key_privacy_terms_created",
    Empty = "",
}

export enum ExchangeNames {
    exchangeName = "billetera_bus",
}

export enum ExchangeTypes {
    Direct = "direct",
    Topic = "topic",
    Default = "default",
    Fanout = "fanout"
}

export enum QueueNames {
    OrderCreated = "order_created",
    OrderUpdated = "order_updated",
    PaymentCreated = "payment_created",
    PaymentUpdated = "payment_updated",
    ExpirationCompleted = "expiration_completed",
    PrivacyTermsUpdated = "privacy_updated",
    PrivacyTermsCreated = "privacy_created",
}

export enum Instituciones {
    ETAPA = "ETAPA",
    MUNICIPIO = "MUNICIPIO",
    EMOV = "EMOV"
}
