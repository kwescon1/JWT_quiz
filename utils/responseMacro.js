export function responseMacro(req, res, next) {
  res.success = (data, message = "") => {
    return res.status(200).json({
      data: data ?? null,
    });
  };

  res.created = (data, message = "Created") => {
    return res.status(201).json({
      message,
      data: data ?? null,
    });
  };

  res.notFound = (error) => {
    return res.status(404).json({
      error,
    });
  };

  res.error = (error, statusCode = 500) => {
    return res.status(statusCode).json({
      error,
    });
  };

  res.serviceUnavailable = (message = "Service Unavailable") => {
    return res.status(503).json({
      message,
    });
  };

  next();
}
