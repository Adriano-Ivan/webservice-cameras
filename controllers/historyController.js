const History=require('./../models/historyModel').History;
exports.getAllHistories =async (req, res) => {
  try{
    const histories=await History.find();
    res.status(200).json({
      status:'success',
      data:{
        histories
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error
    });
  }
 
};
exports.getHistory=async (req, res) => {
  try{
    const history =await History.findById(req.params.id);
    res.status(200).json({
      status:'success',
      data:{
        history
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }

};
exports.createHistory =async (req, res) => {
  try{
    const history = await History.create(req.body);
    res.status(201).json({
      status:'success',
      data:{
        history
      }
    })
  }catch(error){
    res.status(400).json({
      status: "error",
      message:error
    });
  }
 
};
exports.updateHistory =async (req, res) => {
  try{
    const history =await History.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true
    });

    res.status(200).json({
      status:'success',
      data:{
        history
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
};
exports.deleteHistory =async (req, res) => {
  try{
    await History.findByIdAndDelete(req.params.id);

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
