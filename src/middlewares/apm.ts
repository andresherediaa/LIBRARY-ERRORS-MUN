const apm = require('elastic-apm-node');

const apmInstance = {};/*  apm.start({
 serviceName: process.env.ELK_SERVICE_NAME || 'MUNICIPIO_OBSERVABILIDAD',
 apiKey: process.env.ELK_API_KEY,
 serverUrl: process.env.ELK_SERVER_URL,
 environment: process.env.ELK_ENVIRONMENT || 'DEV',
 logLevel: "error",
}); */

// Configura el logger


// Exporta el logger para usarlo en tu aplicación
export { apmInstance };
