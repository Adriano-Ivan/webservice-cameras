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
exports.updateCity = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
exports.deleteCity = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
