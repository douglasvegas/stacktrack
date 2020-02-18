import { existsSync } from 'fs'

import * as ErrorStackParser from 'error-stack-parser'
import { SourceMapConsumer } from 'source-map'
import * as path from 'path'
import * as fs from 'fs'
export default class StackParser {
    private sourceMapDir: string
    private consumers: object
    constructor(sourceMapDir) {
        this.sourceMapDir = sourceMapDir
        this.consumers = {}
    }

    /***
     * 转换错误对象
     * @param stack
     * @param message
     */
    static parseStackTrack(stack: string, message?: string) {
        const error = new Error(message)
        error.stack = stack
        const stackFrame = ErrorStackParser.parse(error)
        return stackFrame
    }

    /***
     * 转换错误对象
     * @param stack
     * @param message
     */
    parseOriginStackTrack(stack: string, message?: string) {
        const frame = StackParser.parseStackTrack(stack, message)
        return this.getOriginalErrorStack(frame)
    }

    /***
     *
     * @param stackFrame
     */
    async getOriginalErrorStack(stackFrame: object[]) {
        const origin = []
        for (const v of stackFrame) {
            origin.push(await this.getOriginalPosition(v))
        }
        return origin
    }

    /***
     *
     * @param stackFrame
     */
    async getOriginalPosition(stackFrame) {
        const { columnNumber, lineNumber } = stackFrame
        let { fileName } = stackFrame
        fileName = path.basename(fileName)

        let consumer = this.consumers[fileName]
        if (consumer === undefined) {
            const sourceMapPath = path.resolve(this.sourceMapDir, fileName)
            if (!fs.existsSync(sourceMapPath)) {
                return stackFrame
            }
            const content = fs.readFileSync(sourceMapPath, 'utf-8')
            consumer = await new SourceMapConsumer(content, null)
            this.consumers[fileName] = consumer
        }
        const parseData = consumer.originalPositionFor({ line: lineNumber, column: columnNumber })
        return parseData
    }
}
