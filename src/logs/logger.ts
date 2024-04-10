//@ts-ignore
import { LogService } from "logstash-winston-3";

export const logger = LogService.getInstance({
  serviceName:  process.env.SERVICE_NAME,
  logstashHost: process.env.LOGS_SERVER,
  logstashPort: process.env.LOGS_PORT,
});

