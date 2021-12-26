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
exports.updateLocalization = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
exports.deleteLocalization = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
