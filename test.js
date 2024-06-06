// // const winston = require("winston");

// // const levels = {
// //     error: 0,
// //     warn: 1,
// //     info: 2,
// //     http: 3,
// //     verbose: 4,
// //     debug: 5,
// //     silly: 6
// //   };

// // winston.log("info", "Hello Anonystick.com!");
// // winston.info("Hello Anonystick.com");

// // const logger1 = winston.createLogger();
// // const logger2 = winston.createLogger();
// // logger1.info("logger1", "Hello Anonystick.com!");
// // logger2.info("logger2", "Hello Anonystick.com!");

// // const logger = winston.createLogger({
// //   level: "info",
// //   format: winston.format.json(),
// //   transports: [
// //     new winston.transports.Console(),
// //     new winston.transports.File({ filename: "logfile.log" }),
// //   ],
// // });

// // logger.info("it works!!");

const winston = require("winston");
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logfile.log" }),
  ],
});

logger.info("Info message");

// const winston = require("winston");
// const { combine, timestamp, printf, colorize, align } = winston.format;

// const logger = winston.createLogger({
//   level: process.env.LOG_LEVEL || "info",
//   format: combine(
//     colorize({ all: true }),
//     timestamp({
//       format: "YYYY-MM-DD hh:mm:ss.SSS A",
//     }),
//     align(),
//     printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
//   ),
//   transports: [new winston.transports.Console()],
// });

// logger.info("Info message");
// logger.error("Error message");
// logger.warn("Warning message");
