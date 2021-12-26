const Country=require('./../models/countryModel').Country;
exports.getAllCountries = async(req, res) => {
  try {
    const countries = await Country.find();

    res.status(200).json({
      status:'success',
      data:{
        countries
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }

};
exports.getCountry =async (req, res) => {
  try {
    const country = await Country.findById(req.params.id);

    res.status(200).json({
      status:'success',
      data:{
        country
      }
    })
  }catch(error){
    res.status(404).json({
      status: "error",
      message: error,
    });
  }

};
exports.createCountry =async (req, res) => {
  try {
    const country = await Country.create(req.body);
    console.log(req.body);
    
    res.status(201).json({
      status:'success',
      data:{
        country
      }
    })
  }catch(error){
    res.status(400).json({
      status: "error",
      message: error,
    });
  }
  
};
exports.updateCountry = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
exports.deleteCountry = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined;",
  });
};
