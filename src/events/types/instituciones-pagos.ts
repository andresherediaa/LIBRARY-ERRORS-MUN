
export type CanalTransacionalOptions = "VENT" | "NDAU" | "ATM" | "BVIR" | "BELE" | "IVR" | "BCEL";

export interface EtapaSolPagosEntries {
 Ientidadexterna: string,
 Icuentabancaria: string,
 Iformapago: string,
 Icanaltransacional: CanalTransacionalOptions,
 Iidentificadordeuda: string,
 Imontopagar: number
}

export interface EtapaSolPagosOutput {
 oEntidadExterna: string,
 oEstado: string,
 oNumTransaccion: number
}


