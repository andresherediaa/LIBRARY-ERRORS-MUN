
export type CanalTransacionalOptions = "VENT" | "NDAU" | "ATM" | "BVIR" | "BELE" | "IVR" | "BCEL";
export type EstadoSolPagoType = "ING" | "FPAG" | "INST" | "DEB" | "BANE" | "MPAG" | "SMAN" | "EMI" | "AUT" | "CLIR" | "ECAN";
export type EntidadExterna = "PIMUNICI";
export type FormaPago = "EFE";
export type EstadoPagoType = "PAG" | "TRAN" | "TCOMP" | "ERRING" | "NOTC" | "MON" | "CTA" | "INST" | "AUT" | "REV" | "ECAN";
export const etapaConsultasExcluidas = ["ERROR", "FPAG", "INST", "DEB", "BANE", "EMI", "CLIR"];
export const allowedTiposETAPA = ["INT", "AGP", "TVD", "RDD", "TLF", "INS", ""];
export const allowedInstitucuiones = ["MUNICIPIO", "ETAPA", "EMOV"];

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

export enum ErrorCategories {
 MIDDLEWARE = "MIDDLEWARE",
 USER = "USER",
 SINTAX = "SINTAX",
 SUCCESS = "SUCCESS",
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
 Ientidadexterna: string,
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
 Ientidadexterna: string;
 Icuentabancaria?: string;
 Iformapago: FormaPago;
 Icanaltransacional: CanalTransacionalOptions;
 Iidentificadordeuda: string;
 Imontopagar: number;
 institucion: string;
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

export interface EtapaReversoOutput {
 xmlns?: string,
 oEntidadExterna: string,
 oEstado: string,
 oNumTransaccion: any,
 oIdentificadorDeuda: string,
 oMensajes?: Object
}

