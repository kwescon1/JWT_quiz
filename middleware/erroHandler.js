// Import the logge
const handleError = (err, req, res, next) => {
  // Extract useful error information
  const errorInfo = {
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    error: err.message,
    stack: err.stack,
  };

  // Switch case on the error type
  switch (err.constructor.name) {
    case "NotFoundException":
      res.notFound("Resource Not Found");
      break;
    // Add more cases as needed for other custom errors
    default:
      // Handle unexpected errors
      res.error("Internal Server Error");
  }
};

module.exports = handleError;
