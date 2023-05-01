// // logger.js
// const winston = require('winston');

// const logger = winston.createLogger({
//   level: 'debug', // Set the log level here; for more details, use 'debug', for fewer, use 'info', 'warn', or 'error'
//   format: winston.format.combine(
//     winston.format.colorize(),
//     winston.format.timestamp(),
//     winston.format.printf(({ timestamp, level, message }) => {
//       return `${timestamp} ${level}: ${message}`;
//     })
//   ),
//   transports: [
//     new winston.transports.Console(),
//   ],
// });

// module.exports = logger;





// logger.js
const winston = require('winston');
const path = require('path');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
  ],
  fallbacks: {
    path: require.resolve('path-browserify')
  }
});

module.exports = logger;
