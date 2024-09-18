// apm.ts
const apm = require('elastic-apm-node').start({
 // The service name is the primary filter in the APM UI and is used to group errors and trace data together. Allowed characters are a-z, A-Z, 0-9, -, _, and space. Overrides the service name in package.json.
 serviceName: 'MUNICIPIO_OBSERVABILIDAD',
 // Use if APM Server requires an API Key. This is used to ensure that only your agents can send data to your APM server. Agents can use API keys as a replacement of secret token, APM server can have multiple API keys. When both secret token and API key are used, API key has priority and secret token is ignored.
 apiKey: 'VnFqX0JaSUIyLUFFeEQwTXNObGU6a3poeEFCdVBTT0dja2w4YUstS0VQdw==',
 // Set the custom APM Server URL (default: http://localhost:8200). The URL must be fully qualified, including protocol (http or https) and port.
 serverUrl: 'https://observabilidad-muni-f2162e.apm.us-east-1.aws.elastic.cloud:443',
 // The name of the environment this service is deployed in, e.g., "production" or "staging". Environments allow you to easily filter data on a global level in the APM UI. It's important to be consistent when naming environments across agents.
 environment: 'DEV',
 logLevel: 'trace',
});

export default apm;
