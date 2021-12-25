const Monitoring = require('./../models/monitoringModel').Monitoring;


exports.getAllMonitorings = async(req, res) => {
  try{
    const monitorings = await Monitoring.find();
    res.status(200).json({
      status: "success",
    
      results: monitorings.length,
      data:{
        monitorings
      },
    });
  }catch(err){
    res.status(400).json({
      status:'fail',
      message:err
    })
  }
  
};

exports.getMonitoring =async(req, res) => {
  try{
    const monitoring =await Monitoring.findById(req.params.id);
    res.status(200).json({
      status:'success',
      data:{
        monitoring
      }
    })
  }catch(err){
    res.status(400).json({
      status:'fail',
      message:err
    })
  }
};
exports.createMonitoring =async (req, res) => {
  try {
    const newMonitoring=await Monitoring.create(req.body)

    console.log(newMonitoring);
    res.status(201).json({
      status: "success",
      data: {
        tour: newMonitoring,
      },
    });
  }catch(err){
    res.status(400).json({
      status:"fail",
      message:err
    })
  }
  
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