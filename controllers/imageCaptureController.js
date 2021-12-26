const ImageCapture=require('./../models/imageCaptureModel').Image

exports.getAllImageCaptures = async(req, res) => {
 try{
    const imageCaptures=await ImageCapture.find();
    res.status(200).json({
      status:"success",
      data:{
        imageCaptures
      }
    })
 }catch(error){
  res.status(404).json({
    status: "error",
    message: error,
  });
 }
  
};
exports.getImageCapture =async (req, res) => {
  try{
    const imageCapture = await ImageCapture.findById(req.params.id);
    res.status(200).json({
      status:'success',
      data:{
        imageCapture
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }

};
exports.createImageCapture =async (req, res) => {
  try{
    const imageCapture=await ImageCapture.create(req.body);
    res.status(201).json({
      status:'success',
      data:{
        imageCapture
      }
    })
  }catch(error){
    res.status(400).json({
      status: "error",
      message: error,
    });
  }
  
};
exports.updateImageCapture = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
exports.deleteImageCapture = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
