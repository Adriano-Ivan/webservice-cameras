const Capture=require('./../models/captureModel').Capture;
exports.getAllCaptures =async(req, res) => {
  try{
    const captures = await Capture.find();
    res.status(200).json({
      status:"success",
      data:{
        captures
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }

};
exports.getCapture =async (req, res) => {
  try{
    const capture =await Capture.findById(req.params.id);

    res.status(200).json({
      status:"success",
      data:{
        capture
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
  
};
exports.createCapture =async (req, res) => {
  try{
    const capture = await Capture.create(req.body);
    res.status(201).json({
      status:'success',
      data:{
        capture
      }
    })
  }catch(error){
    res.status(400).json({
      status: "error",
      message: error
    });
  }
  
};
exports.updateCapture =async (req, res) => {
  try{
    const capture =await Capture.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true
    });

    res.status(200).json({
      status:'success',
      data:{
        capture
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
  
};
exports.deleteCapture =async (req, res) => {
  try{
    await Capture.findByIdAndDelete(req.params.id);

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
