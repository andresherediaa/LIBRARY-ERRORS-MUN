import { OrderStatus } from "..";

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

export interface OrderCreatedEvent {
    data: {
        id: string;
        status: OrderStatus;
        userId: string;
        expiresAt?: Date;
        version: number;
        cart?: CartInterface[]; // Cambiado a la nueva interfaz
        paymentMethod: string;
        totalDeuda: number;
        isPaid?: boolean;
        paidAt?: Date;
        isDelivered?: boolean;
        deliveredAt?: Date;
    };
}

export {};
