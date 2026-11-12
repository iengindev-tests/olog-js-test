import { LogLevel, LogLevelName, type LogEntry, type ILogTransport } from './types/log.js'

export class OLog {
  private transports: ILogTransport[] = []
  private context: LogEntry['context'] = ''

  constructor(context: LogEntry['context'] = 'App') {
    this.context = context
  }

  public setTransport(transport: ILogTransport): this {
    this.transports.push(transport)
    return this
  }

  private write(level: LogLevel, message: LogEntry['message'], meta?: LogEntry['meta']): void {
    for (const transport of this.transports) {
      try {
        transport.log({
          timestamp: new Date().toISOString(),
          level: level,
          levelName: LogLevelName[level],
          context: this.context,
          message: message,
          meta: meta
        })
      } catch(err) {
        console.error('Transport dispatch error:', err)
      }
    }
  }

  public debug(message: LogEntry['message'], meta?: LogEntry['meta']) {
    this.write(LogLevel.DEBUG, message, meta)
  }

  public info(message: LogEntry['message'], meta?: LogEntry['meta']) {
    this.write(LogLevel.INFO, message, meta)
  }

  public warn(message: LogEntry['message'], meta?: LogEntry['meta']) {
    this.write(LogLevel.WARN, message, meta)
  }

  public error(message: LogEntry['message'], meta?: LogEntry['meta']) {
    this.write(LogLevel.ERROR, message, meta)
  }

  public fatal(message: LogEntry['message'], meta?: LogEntry['meta']) {
    this.write(LogLevel.FATAL, message, meta)
  }
}
