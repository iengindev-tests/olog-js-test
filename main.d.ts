import { type ILogTransport, type LogEntry } from '@olog-js/core/types';
export declare class ConsoleTransport implements ILogTransport {
    private output;
    constructor();
    log(entry: LogEntry): void | Promise<void>;
}
//# sourceMappingURL=main.d.ts.map