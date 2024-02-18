export interface PaymentCreatedEvent {
    data: {
        id: string;
        orderId: string;
        paymnetId: string;
        version?: number;
    };
}