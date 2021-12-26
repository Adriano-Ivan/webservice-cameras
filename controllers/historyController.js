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
exports.updateHistory = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
exports.deleteHistory = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
