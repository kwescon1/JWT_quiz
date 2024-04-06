const rateLimit = require("express-rate-limit");

const rateLimiter = (options) => {
  return rateLimit({
    windowMs: options.windowMs || 60 * 1000, // 1 minute
    max: options.max || 60, // Limit each IP to 60 requests per windowMs
    standardHeaders:
      typeof options.standardHeaders === "boolean"
        ? options.standardHeaders
        : true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders:
      typeof options.legacyHeaders === "boolean"
        ? options.legacyHeaders
        : false, // Disable the `X-RateLimit-*` headers
    message: options.message || "Too many requests, please try again later.",
  });
};

module.exports = rateLimiter;
