const User = require('./../models/userModel').User;
exports.getAllUsers =async (req, res) => {
  try{
    const users=await User.find();
    res.status(200).json({
      status:"success",
      data:{
        users
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error
    });
  }
 
};
exports.getUser =async (req, res) => {
  try{
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status:'success',
      data:{
        user
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error
    });
  }
 
};
exports.createUser = async(req, res) => {
  try{
    const user = await User.create(req.body);
    res.status(201).json({
      status:'success',
      data:{
        user
      }
    })
  }catch(error){
    res.status(400).json({
      status: "error",
      message: error
    });
  }
 
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
