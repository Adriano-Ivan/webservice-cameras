const Localization=require('./../models/localizationModel').Localization;
exports.getAllLocalizations = async(req, res) => {
  try{
    const localizations=await Localization.find();
    res.status(200).json({
      status:'success',
      data:{
        localizations
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
  
};
exports.getLocalization =async (req, res) => {
  try{
    const localization=await Localization.findById(req.params.id);
    res.status(200).json({
      status:"success",
      data:{
        localization
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
  
};
exports.createLocalization = async(req, res) => {
  try{
    const localization=await Localization.create(req.body);
    res.status(201).json({
      status:'success',
      data:{
        localization
      }
    })
  }catch(error){
    res.status(400).json({
      status: "error",
      message: error,
    });
  }
  
};
exports.updateLocalization =async (req, res) => {
  try{
    const localization =await Localization.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true
    });

    res.status(200).json({
      status:'success',
      data:{
        localization
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
};
exports.deleteLocalization =async (req, res) => {
  try{
    await Localization.findByIdAndDelete(req.params.id);

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
