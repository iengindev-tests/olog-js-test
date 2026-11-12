import ologBanner from '@olog-js/banner'

import { LogLevel, type ILogTransport, type LogEntry } from '@olog-js/core/types'

import { Colors } from './utils/colors.js'

const LevelColors: Record<LogLevel, string> = {
  [LogLevel.DEBUG]: Colors.magenta,
  [LogLevel.INFO]: Colors.green,
  [LogLevel.WARN]: Colors.yellow,
  [LogLevel.ERROR]: Colors.red,
  [LogLevel.FATAL]: Colors.bgRed,
}

export class ConsoleTransport implements ILogTransport {
  private output: Console['log'] = console.log

  constructor() {
    this.output(ologBanner)
  }

  log(entry: LogEntry): void | Promise<void> {
    const levelColor = LevelColors[entry.level] || Colors.reset

    const timestamp = [Colors.dim, entry.timestamp, Colors.reset].join('')
    const levelName = [levelColor, `[${entry.levelName}]`, Colors.reset].join('')
    const context = [Colors.cyan, `[${entry.context}]`, Colors.reset].join('')

    let output = [timestamp, levelName, context, entry.message].join(' ')

    if (entry.meta && Object.keys(entry.meta).length > 0) {
      output += [Colors.dim, JSON.stringify(entry.meta), Colors.reset].join('')
    }

    this.output(output)
  }
}
