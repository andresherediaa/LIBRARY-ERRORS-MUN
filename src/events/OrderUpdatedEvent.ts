import { OrderStatus } from "..";
import { Subjects } from "./subjects";

interface CartInterface {
    fechaHoraLocal: string;
    fechaCompensacion: string;
    adquiriente?: string;
    secuencia: string;
    terminal: string;
    titulos?: Titulo[];
    institucion: string;
    totalInstitucion: number;
}

interface Titulo {
    titulo: string;
    anio: number;
    rubro: string;
}

export interface OrderUpdatedEvent {
    subject: Subjects.OrderUpdated;
    data: {
        id: string;
        status: OrderStatus;
        userId: string;
        expiresAt: Date;
        cart?: CartInterface[]; // Cambiado a la nueva interfaz
        paymentMethod: string;
        itemsPrice: number;
        shippingPrice: number;
        taxPrice: number;
        totalPrice: number;
        isPaid?: boolean;
        paidAt?: Date;
        isDelivered?: boolean;
        deliveredAt?: Date;
        version: number;
    };
}

export {};
