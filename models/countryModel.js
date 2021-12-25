const mongoose=require('mongoose');

const countrySchema=new mongoose.Schema({
    pais:{
        type:String,
        required:[true,'A name must be specified']
    }
});

exports.schema=countrySchema;
exports.Country=mongoose.model('Paises',countrySchema);