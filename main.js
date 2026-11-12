import { LogLevel, LogLevelName } from './types/log.js';
export class OLog {
    transports = [];
    context = '';
    constructor(context = 'App') {
        this.context = context;
    }
    setTransport(transport) {
        this.transports.push(transport);
        return this;
    }
    write(level, message, meta) {
        for (const transport of this.transports) {
            try {
                transport.log({
                    timestamp: new Date().toISOString(),
                    level: level,
                    levelName: LogLevelName[level],
                    context: this.context,
                    message: message,
                    meta: meta
                });
            }
            catch (err) {
                console.error('Transport dispatch error:', err);
            }
        }
    }
    debug(message, meta) {
        this.write(LogLevel.DEBUG, message, meta);
    }
    info(message, meta) {
        this.write(LogLevel.INFO, message, meta);
    }
    warn(message, meta) {
        this.write(LogLevel.WARN, message, meta);
    }
    error(message, meta) {
        this.write(LogLevel.ERROR, message, meta);
    }
    fatal(message, meta) {
        this.write(LogLevel.FATAL, message, meta);
    }
}
//# sourceMappingURL=main.js.map