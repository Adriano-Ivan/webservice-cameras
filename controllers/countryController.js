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
exports.updateCountry = async(req, res) => {
  try{
    const country =await Country.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true
    });

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
exports.deleteCountry = async (req, res) => {
  try{
    await Country.findByIdAndDelete(req.params.id);

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
