import * as winston from "winston";

// Configure logger
const logger = winston.createLogger({
  level: "info", // Log level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: "logs.log" }), // Log to file
  ],
});

export default logger;
