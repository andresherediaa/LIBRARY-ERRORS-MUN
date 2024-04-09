//@ts-ignore
import { LogService } from "logstash-winston-3";

const logger = LogService.getInstance({
  serviceName:  process.env.SERVICE_NAME,
  logstashHost: process.env.LOGS_SERVER,
  logstashPort: process.env.LOGS_PORT,
});

export { logger };