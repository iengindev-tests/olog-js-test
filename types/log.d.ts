export declare enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    FATAL = 4
}
export declare const LogLevelName: Record<LogLevel, string>;
type Timestamp = string;
type LevelName = string;
type Context = string;
type Message = string;
type Meta = Record<string, any> | undefined;
export interface LogEntry {
    timestamp: Timestamp;
    level: LogLevel;
    levelName: LevelName;
    context: Context;
    message: Message;
    meta?: Meta;
}
export interface ILogTransport {
    log(entry: LogEntry): void | Promise<void>;
}
export {};
//# sourceMappingURL=log.d.ts.map