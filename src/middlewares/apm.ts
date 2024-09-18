// apm.ts
const apm = require('elastic-apm-node').start({
 serviceName: process.env.ELK_SERVICE_NAME || 'MUNICIPIO_OBSERVABILIDAD',
 apiKey: process.env.ELK_API_KEY,
 serverUrl: process.env.ELK_SERVER_URL,
 environment: process.env.ELK_ENVIRONMENT || 'DEV',
 logLevel: process.env.ELK_LOG_LEVEL || 'trace',
});

export default apm;
