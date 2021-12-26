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
exports.updateImageCapture = async(req, res) => {
  try{
    const imageCapture =await ImageCapture.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true
    });

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
exports.deleteImageCapture = async(req, res) => {
  try{
    await ImageCapture.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status:'success',
      data:{
        data:null
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message:error,
    });
  }
};
