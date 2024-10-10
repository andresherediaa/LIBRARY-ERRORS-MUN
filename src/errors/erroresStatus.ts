// Define los códigos de error y el mapeo en el mismo archivo

export const errorCodes: { [key: string]: string } = {
 "E000": "Ejecucion satisfactoria",
 "E001": "Clave incorrecta",
 "E002": "Por favor verifique el parametro de consulta",
 "E003": "El usuario o placa tiene titulos de credito pendientes, debe realizar el tramite en las oficinas de la EMOV EP en Tesoreria",
 "E004": "La placa del vehiculo se encuentra en un titulo de credito, debe realizar el tramite en las oficinas de la EMOV EP en Tesoreria",
 "E005": "No hay valores pendientes de pago",
 "E006": "Revisar el valor que se envia en el usuario recaudador",
 "E007": "Revisar el valor que se envia en el establecimiento",
 "E008": "Revisar el codigo del establecimiento enviado",
 "E009": "Revisar el valor que se envia en el numero de transaccion",
 "E010": "El numero de transacción enviado, ya consta como recaudado",
 "E011": "No hay rubros manuales a recaudar", //CAMBIO
 "E012": "Revisar el valor que se envia en el lote del rubro RTV",
 "E013": "Revisar el valor que se envia en el lote del rubro CVP",
 "E014": "Revisar el valor que se envia en el lote del rubro PRV",
 "E015": "Revisar el valor que se envia en el lote del rubro CER",
 "E016": "Revisar el valor que se envia en el lote del rubro CXC",
 "E017": "Revisar el valor que se envia en el lote del rubro CIT",
 "E018": "Revisar el valor que se envia en el lote del rubro MSE",
 "E019": "Nro. de lote del servicio RTV no existe o ya fue recaudado",
 "E020": "Nro. de lote del servicio CVP no existe o ya fue recaudado",
 "E021": "Nro. de lote del servicio PRV no existe o ya fue recaudado",
 "E022": "Nro. de lote del servicio CER no existe o ya fue recaudado",
 "E023": "Nro. de lote del servicio CXC no existe o ya fue recaudado",
 "E024": "Nro. de lote del servicio CIT no existe o ya fue recaudado",
 "E025": "Nro. de lote del servicio MSE no existe o ya fue recaudado",
 "E026": "Revise el detalle de recaudación manual",
 "E027": "Total de recaudación manual no es igual al total detalle",
 "E028": "No se ha enviado el documento de identificacion del usuario",
 "E029": "El formato de identificación del usuario no es valido",
 "E030": "No se ha enviado el tipo de identificacion del usuario",
 "E031": "Revisar tipo documento de usuario valores validos: “CED”, “PAS”, “RUC”",
 "E032": "No se ha enviado los nombres y/o apellidos del usuario",
 "E033": "No se ha enviado",
 "E034": "No se ha enviado el telefono del usuario",
 "E035": "No se ha enviado la direccion del usuario",
 "E036": "No se ha enviado el correo electrónico del usuario",
 "E037": "Revisar el correo electronico enviado",
 "E038": "Debe enviarse para el cobro del rubro CVP y PRV juntos",
 "E039": "Revisar el numero de ítem enviado",
 "E040": "Revisar el precio del item enviado",
 "E041": "No se puede emitir el Certificado de no Adeudar porque tiene multas pendientes por el rubro CVP",
 "E042": "No se puede emitir el Certificado de no Adeudar porque tiene multas pendientes por el rubro PRV",
 "E043": "No se puede emitir el Certificado de no Adeudar porque tiene multas pendientes por el rubro MSE",
 "E044": "No se puede emitir el Certificado de no Adeudar porque tiene multas pendientes por el rubro CIT",
 "E045": "Revisar el usuario que reversa",
 "E046": "Revisar el usuario que aprueba el reverso",
 "E047": "Revisar el nro. de transacción para el reverso",
 "E048": "Revisar el número de transacción enviado",
 "E049": "Revisar que la recaudacion se realizo el mismo dia en el que se solicita el reverso",
 "E050": "No hay rubros a reversar",
 "E051": "Vehiculo ya salio del CRV no es posible reversar la transaccion",
 "E052": "No es posible reversar los valores por RTV, no se puede reversar la transaccion",
 "E053": "Revisar el valor que se envía en el lote del rubro OTR",
 "E054": "Revisar nro. de lote del rubro OTR",
 "E055": "No es posible reversar el cobro, la Orden de Pago no se encuentra en estado \"ESPERA\"",
 "E056": "Revisar el valor que se envía en el lote del rubro ORD",
 "E057": "No se puede emitir el Certificado de no Adeudar porque tiene multas pendientes por el rubro ORD",
 "E058": "Revisar nro. de lote del rubro ORD",
 "E099": "No se ejecutó correctamente la recaudación",

 "M001": "Error al cancelar Rubros",
 "M002": "Error al reversar Rubros",
 "M003": "No se encuentra la orden de pago",
 "M004": "No se puede procesar una orden que fue cancelada",
 "M005": "Error en los parametros de la orden",
 "M006": "Error al actualizar la orden de pago",
 "M007": "Error al inicializar base de datos",
 "M008": "No se encuentra el pago",
 "M009": "No se puede reversar una deuda no pagada",
 "M010": "No se puede procesar una orden que ya fue pagada",
 "M011": "Error al consultar Rubros",
 "M012": "La Consulta se realizo con exito",
 "M013": "API Key de Middleware Invalida",
 "M014": "Error al generar comprobante de pago",
 "M015": "Error al obtener Total Pagado",
 "M016": "Error al obtener Comprobante de una orden no pagada/reversada",

 //confirmapago
 "PAG": "Ejecucion satisfactoria",
 "TRAN": "Transaccion no registrada, Existe una solicitud de pago en el mismo día para el identificador de deuda ya confirmada(PAG)",
 "TCOMP": "Transaccion ya comprobada",
 "ERRING": "Transaccion no puede comprobar registro porque existió un error en la transaccion al ingreso",
 "NOTC": "Transacción no puede ser comprobada porque existe pendiente de comprobacion una nota de credito",
 "MON": "El valor de monto no coincide",
 "CTA": "El valor de la cuenta bancaria no coincide",
 "INST": "El código de Instalacion no existe en la base maestra",
 "AUT": "No tiene autorizacion",
 "REV": "Reversado",
 "ECAN": "Canal transaccional enviado no existe",
 //solpago
 "ING": "Se ha realizado la solicitud satisfactoriamente",
 "FPAG": "Existe fecha de pago para el mes actual, el pago no procede, Solicitud de pago duplicada para la misma fecha-hora",
 "DEB": "El pago se realiza por debito en la cuenta de Entidad Externa",
 "BANE": "El pago ya se registro como pagado por Banca Electronica",
 "MPAG": "El pago no corresponde con el monto adeudado para esa instalacion",
 "SMAN": "Sistema en mantenimiento.",
 "EMI": "Deuda esta siendo emitida, consultar luego",
 "CLIR": "Cliente tiene restricciones de corbo",
 "PPAG": "Pago en proceso Banca Electronica",

 //consultas
 "OK": "La Consulta se realizo con exito",
 "ERROR": "Se produjo un error al realizar la consulta",
 "TINS": "Tipo de Instalación no coincide con identificador de la deuda",

 //reversoEtapa

 "OK200": "El pago de la deuda ha sido reversado con éxito",
 "ERR02": "Error al reversar el pago de la deuda, consulte con Recaudación",
 "ERR03": "Error al reversar el pago de la deuda, consulte con Recaudación",
 "ERR11": "Los parámetros especificados para el reverso son incorrectos",
 "ERR12": "La transacción ya fue reversada",
 "ERR13": "La transacción no se encuentra pagada",
 "ERR14": "No se encuentran los parámetros de configuración requeridos, consulte con Recaudación",
 "ERR15": "El número de la transacción no es correcto",
 "ERR16": "El pago no tiene un documento asociado",
 "ERR17": "No se puede reversar un pago contabilizado",
 "ERR18": "No se puede reversar un pago de [desde] a [hasta], excepto [días]",
 "ERR31": "La entidad bancaria no está habilitada para realizar reversos",
 "ERR32": "La entidad bancaria no tiene permisos habilitados",
 "ERR33": "La entidad bancaria no tiene habilitado el permiso para reversos",

 //Errores genrales
 'ECONNABORTED': 'La solicitud ha superado el tiempo de espera. Inténtelo de nuevo más tarde.',
 'ECONNREFUSED': 'No se pudo conectar al servidor. Verifique su conexión y vuelva a intentarlo.',
 'ENOTFOUND': 'No se pudo encontrar el servidor. Verifique la URL e inténtelo de nuevo.',
 'EHOSTUNREACH': 'El servidor esta inalcanzable. Verifique su red e intente nuevamente.',
 '500': 'Hubo un error en el servidor. Intentelo más tarde.',
 '404': 'No se encontro el recurso solicitado.',
 '401': 'No tiene autorizacion para acceder a este recurso.',
 '400': 'La solicitud esta mal formada o contiene datos inválidos.',
 "ERR_BAD_REQUEST": "La solicitud está mal formada o contiene datos invalidos.",
 "ERR_NETWORK": "Hubo un problema de conexión con la red.",
 "ERR_BAD_RESPONSE": "El servidor respondio, pero la respuesta no fue valida.",
 "ERR_TIMEOUT": "La solicitud tomo demasiado tiempo para completarse",
 "ERR_CANCELED": "La solicitud fue cancelada antes de completarse.",

 //Errores Especificos PARA EL USURIO
 "MIDDLEWARE": "Error interno de Sistema. Inténtelo nuevamente más tarde.",
 "USER": "",
 "SINTAX": "Hemos encontrado un problema al procesar su solicitud. Inténtelo nuevamente más tarde.",
 "SUCCESS": "",
};

export const statusCodeMapping: { [key: string]: string } = {
 "E000": "success",
 "E001": "error",
 "E002": "error",
 "E003": "error",
 "E004": "error",
 "E005": "success",
 "E006": "error",
 "E007": "error",
 "E008": "error",
 "E009": "error",
 "E010": "error",
 "E011": "error",
 "E012": "error",
 "E013": "error",
 "E014": "error",
 "E015": "error",
 "E016": "error",
 "E017": "error",
 "E018": "error",
 "E019": "error",
 "E020": "error",
 "E021": "error",
 "E022": "error",
 "E023": "error",
 "E024": "error",
 "E025": "error",
 "E026": "error",
 "E027": "error",
 "E028": "error",
 "E029": "error",
 "E030": "error",
 "E031": "error",
 "E032": "error",
 "E033": "error",
 "E034": "error",
 "E035": "error",
 "E036": "error",
 "E037": "error",
 "E038": "error",
 "E039": "error",
 "E040": "error",
 "E041": "error",
 "E042": "error",
 "E043": "error",
 "E044": "error",
 "E045": "error",
 "E046": "error",
 "E047": "error",
 "E048": "error",
 "E049": "error",
 "E050": "error",
 "E051": "error",
 "E052": "error",
 "E053": "error",
 "E054": "error",
 "E055": "error",
 "E056": "error",
 "E057": "error",
 "E058": "error",
 "E099": "error",
 "M001": "error",
 "M002": "error",
 "M003": "error",
 "M004": "error",
 "M005": "error",
 "M006": "error",
 "M007": "error",
 "M008": "error",
 "M009": "error",
 "M010": "error",
 "M011": "error",
 "M012": "success",
 "M013": "error",
 "M014": "error",
 "M015": "error",
 "M016": "error",

 //confirmaPagoEtapa
 "PAG": "success",
 "TRAN": "error",
 "TCOMP": "success",
 "ERRING": "error",
 "NOTC": "error",
 "MON": "error",
 "CTA": "error",
 "INST": "error",
 "AUT": "error",
 "REV": "success",
 "ECAN": "error",
 //solpagoEtapa
 "ING": "success",
 "FPAG": "error",
 "DEB": "error",
 "BANE": "error",
 "MPAG": "error",
 "SMAN": "error",
 "EMI": "error",
 "CLIR": "error",
 "PPAG": "error",

 //MUNI
 "MUNI001": "success",
 "MUNI002": "error",

 //consultas
 "OK": "success",
 "ERROR": "error",
 "TINS": "error",

 //reverso
 "OK200": "success",
 "ERR02": "error",
 "ERR03": "error",
 "ERR11": "error",
 "ERR12": "error",
 "ERR13": "error",
 "ERR14": "error",
 "ERR15": "error",
 "ERR16": "error",
 "ERR17": "error",
 "ERR18": "error",
 "ERR31": "error",
 "ERR32": "error",
 "ERR33": "error",
 //errores generales
 'ECONNABORTED': 'error',
 'ECONNREFUSED': 'error',
 'ENOTFOUND': 'error',
 'EHOSTUNREACH': 'error',
 '500': 'error',
 '404': 'error',
 '401': 'error',
 '400': 'error',
 "ERR_BAD_REQUEST": "error",
 "ERR_NETWORK": "error",
 "ERR_BAD_RESPONSE": "error",
 "ERR_TIMEOUT": "error",
 "ERR_CANCELED": "error",

 "MIDDLEWARE": "error",
 "USUARIO": "error",
 "TECNICO": "error",
 "SUCCESS": "success",
};

export const httpStatusCodes: { [key: string]: number } = {
 "E000": 200,
 "E001": 401,
 "E002": 400,
 "E003": 409,
 "E004": 409,
 "E005": 200,
 "E006": 400,
 "E007": 400,
 "E008": 400,
 "E009": 400,
 "E010": 409,
 "E011": 200,
 "E012": 400,
 "E013": 400,
 "E014": 400,
 "E015": 400,
 "E016": 400,
 "E017": 400,
 "E018": 400,
 "E019": 409,
 "E020": 409,
 "E021": 409,
 "E022": 409,
 "E023": 409,
 "E024": 409,
 "E025": 409,
 "E026": 400,
 "E027": 400,
 "E028": 400,
 "E029": 400,
 "E030": 400,
 "E031": 400,
 "E032": 400,
 "E033": 400,
 "E034": 400,
 "E035": 400,
 "E036": 400,
 "E037": 400,
 "E038": 400,
 "E039": 400,
 "E040": 400,
 "E041": 409,
 "E042": 409,
 "E043": 409,
 "E044": 409,
 "E045": 400,
 "E046": 400,
 "E047": 400,
 "E048": 400,
 "E049": 400,
 "E050": 409,
 "E051": 409,
 "E052": 409,
 "E053": 400,
 "E054": 400,
 "E055": 422,
 "E056": 400,
 "E057": 409,
 "E058": 409,
 "E099": 500,

 "M001": 500,
 "M002": 500,
 "M003": 404,
 "M004": 400,
 "M005": 400,
 "M006": 500,
 "M007": 500,
 "M008": 404,
 "M009": 400,
 "M010": 409,
 "M011": 500,
 "M012": 200,
 "M013": 401,
 "M014": 500,
 "M015": 500,
 "M016": 400,

 "PAG": 200,
 "TRAN": 409,
 "TCOMP": 409,
 "ERRING": 500,
 "NOTC": 409,
 "MON": 400,
 "CTA": 400,
 "INST": 404,
 "AUT": 401,
 "REV": 409,
 "ECAN": 400,

 "ING": 200,
 "FPAG": 409,
 "DEB": 200,
 "BANE": 409,
 "MPAG": 400,
 "SMAN": 503,
 "EMI": 202,
 "CLIR": 403,
 "PPAG": 202,

 "OK": 200,
 "ERROR": 500,
 "TINS": 400,

 "OK200": 200,
 "ERR02": 500,
 "ERR03": 500,
 "ERR11": 400,
 "ERR12": 409,
 "ERR13": 409,
 "ERR14": 500,
 "ERR15": 400,
 "ERR16": 400,
 "ERR17": 400,
 "ERR18": 400,
 "ERR31": 403,
 "ERR32": 403,
 "ERR33": 403,

 "ECONNABORTED": 408,
 "ECONNREFUSED": 503,
 "ENOTFOUND": 404,
 "EHOSTUNREACH": 503,
 "500": 500,
 "404": 404,
 "401": 401,
 "400": 400,
 "ERR_BAD_REQUEST": 400,
 "ERR_NETWORK": 503,
 "ERR_BAD_RESPONSE": 502,
 "ERR_TIMEOUT": 408,
 "ERR_CANCELED": 499
}


export class ErrorController {
 static getGeneralStatus(apiStatusCode: string): string {
  return statusCodeMapping[apiStatusCode] || "error";
 }

 static getErrorMessage(apiStatusCode: string): string {
  return errorCodes[apiStatusCode] || "Error al procesar la solicitud";
 }

 static getErrorCodes(apiStatusCode: string): string {
  return errorCodes[apiStatusCode];
 }

 static gethttpStatusCodes(apiStatusCode: string): number {
  return httpStatusCodes[apiStatusCode];
 }
}

