import { type LogEntry, type ILogTransport } from './types/log.js';
export declare class OLog {
    private transports;
    private context;
    constructor(context?: LogEntry['context']);
    setTransport(transport: ILogTransport): this;
    private write;
    debug(message: LogEntry['message'], meta?: LogEntry['meta']): void;
    info(message: LogEntry['message'], meta?: LogEntry['meta']): void;
    warn(message: LogEntry['message'], meta?: LogEntry['meta']): void;
    error(message: LogEntry['message'], meta?: LogEntry['meta']): void;
    fatal(message: LogEntry['message'], meta?: LogEntry['meta']): void;
}
//# sourceMappingURL=main.d.ts.map