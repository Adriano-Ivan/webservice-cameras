const Monitoring = require('./../models/monitoringModel').Monitoring;

exports.checkBody = (req, res, next) => {
  console.log("MIDDLE");
  console.log(req.body);
  if (
    !req.body.placa ||
    !req.body.dataInicio ||
    !req.body.isContinuo ||
    !req.body.createdAt
  ) {
    return res.status(400).json({
      status: "fail",
      message: "Missing field",
    });
  }
  next();
};
exports.getAllMonitorings = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: monitoringsExample.length,
    data: monitoringsExample,
  });
};

exports.getMonitoringById = (req, res) => {
  const monitoring = monitoringsExample.find(
    (m) => m["id"] === req.params["id"] * 1
  );
  //   const statusN = monitoring !== undefined ? 200 : 404;
  console.log(req.params);
  res.status(200).json({
    status: "success",

    data: monitoring,
  });
};
exports.createMonitoring = (req, res) => {
  //console.log(req.body);
  const newId = monitoringsExample[monitoringsExample.length - 1].id + 1;

  const newMonitoring = Object.assign({ id: newId }, req.body);

  monitoringsExample.push(newMonitoring);
  console.log(newMonitoring);
  res.status(201).json({
    status: "success",
    data: {
      tour: newMonitoring,
    },
  });
};
exports.updateMonitoring = (req, res) => {
  const status =
    req.params["id"] * 1 <= monitoringsExample[monitoringsExample.length - 1].id
      ? 200
      : 404;
  res.status(200).json({
    status: "success",
    data: {
      data: "<Updated monitoring>...",
    },
  });
};
exports.deleteMonitoring = (req, res) => {
  res.status(204).json({
    status: "success",
    data: {
      data: null,
    },
  });
};

// exports.checkID = (req, res, next, val) => {
//   console.log(`Monitoring ID: ${req.params.id}`);
//   if (req.params.id * 1 > monitoringsExample.length) {
//     return res.status(400).json({
//       status: "fail",
//       message: "Invalid ID",
//     });
//   }
//   next();
// };