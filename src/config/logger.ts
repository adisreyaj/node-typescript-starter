import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
  format: format.combine(format.timestamp(), format.ms(), format.json()),
  transports: [
    new transports.Console({
      level: process.env.NODE_ENV === ' production' ? 'error' : 'debug',
      format: format.combine(
        format.colorize({
          message: true,
        }),
      ),
    }),
    new transports.File({
      filename: 'logs/debug.log',
      level: 'debug',
    }),
  ],
  exceptionHandlers: [
    new transports.File({
      filename: 'logs/exceptions.log',
    }),
  ],
});

export class LoggerStream {
  public write(message: string) {
    logger.info(message.substring(0, message.lastIndexOf('\n')));
  }
}
