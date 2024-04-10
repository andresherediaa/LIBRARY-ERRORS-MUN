//@ts-ignore
import { LogService } from "logstash-winston-3";

export const logger = ( service_name: string, logs_server:string, logs_port: number ) => {
  return LogService.getInstance({
    serviceName:  service_name,
    logstashHost: logs_server,
    logstashPort: logs_port,
  });
}
