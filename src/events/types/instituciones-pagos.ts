
export type CanalTransacionalOptions = "VENT" | "NDAU" | "ATM" | "BVIR" | "BELE" | "IVR" | "BCEL";
export type EstadoSolPagoType = "ING" | "FPAG" | "INST" | "DEB" | "BANE" | "MPAG" | "SMAN" | "EMI" | "AUT" | "CLIR" | "ECAN";
export type EntidadExterna = "PIMUNICI";
export type FormaPago = "EFE";
export type EstadoPagoType = "PAG" | "TRAN" | "TCOMP" | "ERRING" | "NOTC" | "MON" | "CTA" | "INST" | "AUT" | "REV" | "ECAN";

export enum CanalTransacionalOptionsEnum {
 VENT = "VENT",
 NDAU = "NDAU",
 ATM = "ATM",
 BVIR = "BVIR",
 BELE = "BELE",
 IVR = "IVR",
 BCEL = "BCEL"
}

export enum EstadoSolPagoTypeEnum {
 ING = "ING",
 FPAG = "FPAG",
 INST = "INST",
 DEB = "DEB",
 BANE = "BANE",
 MPAG = "MPAG",
 SMAN = "SMAN",
 EMI = "EMI",
 AUT = "AUT",
 CLIR = "CLIR",
 ECAN = "ECAN"
}

export enum EntidadExternaEnum {
 PIMUNICI = "PIMUNICI"
}

export enum FormaPagoEnum {
 EFE = "EFE"
}

export enum EstadoPagoTypeEnum {
 PAG = "PAG",
 TRAN = "TRAN",
 TCOMP = "TCOMP",
 ERRING = "ERRING",
 NOTC = "NOTC",
 MON = "MON",
 CTA = "CTA",
 INST = "INST",
 AUT = "AUT",
 REV = "REV",
 ECAN = "ECAN"
}

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
 oNumTransaccion: number,
 Iidentificadordeuda?: string;
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




