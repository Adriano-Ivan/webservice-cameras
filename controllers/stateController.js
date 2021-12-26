const State=require('./../models/stateModel').State;

exports.getAllStates = async(req, res) => {
  try{
    const states = await State.find();

    res.status(200).json({
      status:'success',
      data:{
        states
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }

};
exports.getState = async(req, res) => {
  try{
    const state = await State.findById(req.params.id);

    res.status(200).json({
      status:'success',
      data:{
        state
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
 
};
exports.createState =async (req, res) => {
  try{
    const state = await State.create(req.body);

    res.status(201).json({
      status:'success',
      data:{
        state
      }
    })
  }catch(error){
    res.status(400).json({
      status: "error",
      message: error,
    });
  }
 
};
exports.updateState = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
exports.deleteState = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
