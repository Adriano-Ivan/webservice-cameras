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
exports.updateState =async (req, res) => {
  try{
    const state=await State.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true
    });

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
exports.deleteState = async(req, res) => {
  try{
    await State.findByIdAndDelete(req.params.id);

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
