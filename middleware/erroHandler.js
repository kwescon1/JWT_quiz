const handleError = (err, req, res, next) => {
  // Respond based on the type of error
  if (err.type) {
    switch (err.type) {
      case "NotFound":
        res.notFound(err.message);
        break;

      default:
        // Default to internal server error if error type is unrecognized
        res.error("Internal Server Error");
        break;
    }
  } else {
    // If error does not specify a type, treat as internal server error
    res.error("Internal Server Error");
  }
};

module.exports = handleError;
