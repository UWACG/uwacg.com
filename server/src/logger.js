/**
 * Winston logger for the entire server. Should be used whenever logging is
 * needed.
 */
// TODO(JX): Add log routing to file / loggly / etc.
const winston = require('winston');

winston.emitErrs = true;

const logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

logger.stream = { write: message => logger.info(message) };

module.exports = logger;
