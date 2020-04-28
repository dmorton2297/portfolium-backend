export default class Logger {
    constructor() {}

    debug(message) {
        console.debug(`Portfolium-Backend  [DEBUG]\t${message}`);
    }

    info(message) {
        console.info(`Portfolium-Backend   [INFO]\t${message}`);
    }

    log(message) {
        console.log(`Portfolium-Backend    [LOG]\t${message}`);
    }

    error(message) {
        console.error(`Portfolium-Backend [ERROR]\t${message}`)
    }
}