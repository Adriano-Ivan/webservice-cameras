const City=require('./../models/cityModel').City;
exports.getAllCities =async(req, res) => {
  try{
    const cities = await City.find();
    res.status(200).json({
      status:'success',
      data:{
        cities
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }

};
exports.getCity =async (req, res) => {
  try {
    const city = await City.findById(req.params.id);

    res.status(200).json({
      status:'success',
      data:{
        city
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
 
};
exports.createCity = async(req, res) => {
  try {
    const city = await City.create(req.body);

    res.status(201).json({
      status:'success',
      data:{
        city
      }
    })
  }catch(error){
    res.status(400).json({
      status: "error",
      message: error
    });
  }
 
};
exports.updateCity =async (req, res) => {
  try{
    const city =await City.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true
    });

    res.status(200).json({
      status:'success',
      data:{
        city
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
  
};
exports.deleteCity = async(req, res) => {
  try{
    await City.findByIdAndDelete(req.params.id);

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
