//@ts-ignore
import { LogService } from "logstash-winston-3";

console.log("LIBRARIA-------------", process.env.LOGS_SERVER, process.env.LOGS_PORT, process.env.LOGS_SERVER);

export const logger = LogService.getInstance({
  serviceName:  process.env.SERVICE_NAME,
  logstashHost: process.env.LOGS_SERVER,
  logstashPort: process.env.LOGS_PORT,
});

