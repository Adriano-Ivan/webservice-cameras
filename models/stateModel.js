const mongoose=require('mongoose');
const countrySchema=require('./countryModel').schema;

const stateSchema=new mongoose.Schema({
    estado:{
        type:String,
        required:[true,'A name must be specified']
    },
    pais:{
        type:countrySchema,
        required:[true,'A country must be specified']
    }
});

exports.schema=stateSchema;
exports.State=mongoose.model('Estados',stateSchema);