/* const apm = require('elastic-apm-node');
const winston = require('winston');
const { ElasticsearchTransport } = require('winston-elasticsearch');

// Inicializa el APM
const apmInstance = apm.start({
 serviceName: process.env.ELK_SERVICE_NAME || 'MUNICIPIO_OBSERVABILIDAD',
 apiKey: process.env.ELK_API_KEY,
 serverUrl: process.env.ELK_SERVER_URL,
 environment: process.env.ELK_ENVIRONMENT || 'DEV',
 logLevel: 'error',
});

// Configura el transport para Elasticsearch
const esTransport = new ElasticsearchTransport({
 level: 'info',
 clientOpts: {
  node: process.env.ELK_SERVER_URL!,
  auth: {
   apiKey: process.env.ELK_API_KEY!, // Si es necesario
  },
  ssl: {
   rejectUnauthorized: false, // Cambia a true si es necesario
  },
 },
});

// Configura el logger
const loggerAPM = winston.createLogger({
 level: 'info',
 format: winston.format.json(),
 transports: [
  esTransport,
  new winston.transports.Console(),
 ],
});

// Captura errores y envíalos al APM
loggerAPM.on('error', (error: any) => {
 apm.captureError(error); // Envía el error al APM
});

// Captura logs y envíalos al APM
loggerAPM.on('data', (log: any) => {
 apm.captureError(log); // Captura el log en APM
});


// Exporta el logger y el APM para usarlos en tu aplicación
export { apmInstance, loggerAPM }; */

