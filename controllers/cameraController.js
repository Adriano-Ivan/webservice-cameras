const Camera=require('./../models/cameraModel').Camera;
exports.getAllCameras = async(req, res) => {
  try{
    const cameras = await Camera.find();
    res.status(200).json({
      status:'success',
      data:{
        cameras
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
 
};
exports.getCamera =async (req, res) => {
  try {
    const camera = await Camera.findById(req.params.id);
    res.status(200).json({
      status:"success",
      data:{
        camera
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }

};
exports.createCamera = async(req, res) => {
  try {
    const camera = await Camera.create(req.body);
    res.status(201).json({
      status:'success',
      data:{
        camera
      }
    })
  }catch(error){
    res.status(400).json({
      status: "error",
      message: error,
    });
  }
 
};
exports.updateCamera = async(req, res) => {
  try {
    const camera = await Camera.findByIdAndUpdate(req.params.id,req.body, {
      new:true,
      runValidators:true
    });

    res.status(200).json({
      status:'success',
      data:{
        camera
      }
    })
  }catch(error){
    res.status(404).json({
      status: "fail",
      message: error
    });
  }
 
};
exports.deleteCamera = async(req, res) => {
  try{
    await Camera.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status:'success',
      data:{
        data:null
      }
    })
  }catch(error){
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
  
};
