
export type CanalTransacionalOptions = "VENT" | "NDAU" | "ATM" | "BVIR" | "BELE" | "IVR" | "BCEL";
export type EstadoSolPagoType = "ING" | "FPAG" | "INST" | "DEB" | "BANE" | "MPAG" | "SMAN" | "EMI" | "AUT" | "CLIR" | "ECAN";
export type EntidadExterna = "PIMUNICI";
export type FormaPago = "EFE";
export type EstadoPagoType = "PAG" | "TRAN" | "TCOMP" | "ERRING" | "NOTC" | "MON" | "CTA" | "INST" | "AUT" | "REV" | "ECAN";

export interface EtapaSolPagosEntries {
 Ientidadexterna: EntidadExterna,
 Icuentabancaria: string,
 Iformapago: FormaPago,
 Icanaltransacional: CanalTransacionalOptions,
 Iidentificadordeuda: string,
 Imontopagar: number
}
export interface EtapaSolPagosOutput {
 oEntidadExterna: FormaPago,
 oEstado: EstadoSolPagoType,
 oNumTransaccion: number
}
export interface EtapaConfirmarPagoEntries {
 Ientidadexterna: EntidadExterna,
 Icuentabancaria: string,
 formapago: FormaPago,
 Icanaltransacional: CanalTransacionalOptions,
 Iidentificadordeuda: string,
 Imontopagar: number,
 Inumtransaccion: number
}
export interface EtapaConfirmarPagoOutput {
 oEntidadExterna: EntidadExterna,
 oEstado: EstadoPagoType,
 oNumTransaccion: number,
 oIdentificadorDeuda: string,
 oInsCodReferencia: string,
 oNombresRazonSocial: string,
 oMensajeCliente: string
}




