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
exports.updateCamera = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
exports.deleteCamera = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
