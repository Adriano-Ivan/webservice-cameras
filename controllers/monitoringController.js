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
    res.status(404).json({
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
    res.status(404).json({
      status:'fail',
      message:err
    })
  }
};
exports.createMonitoring =async (req, res) => {
  try {
   // const newMonitoring=new Monitoring({}) 
   // newMonitoring.save()
    const newMonitoring=await Monitoring.create(req.body)

    console.log(newMonitoring);
    res.status(201).json({
      status: "success",
      data: {
         newMonitoring,
      },
    });
  }catch(err){
    res.status(400).json({
      status:"fail",
      message:err
    })
  }
  
};
exports.updateMonitoring =async (req, res) => {
  try{
    const monitoring=await Monitoring.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true
    })
    res.status(200).json({
      status: "success",
      data: {
        
          monitoring
        
      },
    });
  }catch(error){
    res.status(404).json({
      status:'fail',
      message:error
    })
  }
  
};
exports.deleteMonitoring =async(req, res) => {
  try{
    await Monitoring.findByIdAndDelete(req.params.id);
    
    res.status(204).json({
      status: "success",
      data: {
        data: null,
      },
    });
  }catch(error){
    res.status(404).json({
      status:"fail",
      data:{
        data:null
      }
    })
  }

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