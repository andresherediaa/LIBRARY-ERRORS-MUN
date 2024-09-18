const winston = require('winston');
const LogstashTransport = require('logstash-winston-3');
const apm = require('elastic-apm-node');

const apmInstance = apm.start({
 serviceName: process.env.ELK_SERVICE_NAME || 'MUNICIPIO_OBSERVABILIDAD',
 apiKey: process.env.ELK_API_KEY,
 serverUrl: process.env.ELK_SERVER_URL,
 environment: process.env.ELK_ENVIRONMENT || 'DEV',
 logLevel: "error",
});

// Configura el logger
const loggerAPM = winston.createLogger({
 level: 'info',
 format: winston.format.json(),
 transports: [
  new LogstashTransport({
   level: 'info',
   host: process.env.ELK_SERVER_URL,
   port: 443,
   ssl: true,
  }),
  new winston.transports.Console(),
 ],
});

// Asegúrate de que APM capture logs
loggerAPM.on('data', (log: any) => {
 console.log("captura el log......");
 apmInstance.captureError(log);
});

// Exporta el logger para usarlo en tu aplicación
export { apmInstance, loggerAPM };
