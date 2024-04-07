// notFound.js
function throwNotFound(message = "Resource not found") {
  const err = new Error(message);
  err.type = "NotFound"; // Custom property indicating the type of error
  throw err;
}

module.exports = throwNotFound;
