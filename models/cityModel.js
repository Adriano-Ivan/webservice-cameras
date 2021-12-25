const mongoose=require('mongoose');
const countrySchema=require('./countryModel').schema;

const citySchema = new mongoose.Schema({
    cidade:{
        type:String,
        required:[true,'A name must be specified']
    },
    pais:{
        type:countrySchema,
        required:[true,'A country must be specified']
    }
});

exports.schema=citySchema;
exports.City=mongoose.model('Cidades',citySchema);