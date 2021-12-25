const mongoose = require('mongoose');
const citySchema=require('./cityModel').schema;

const localizationSchema=new mongoose.Schema({
    longitude:{
        type:String,
        required:[true,'A longitude must be specified']
    },
    latitude:{
        type:String,
        required:[true,'A latitude must be specified']
    },
    cidade:{
        type:citySchema,
        required:[true,'A city must be specified']
    }
})

exports.schema=localizationSchema;
exports.Localization=mongoose.model('Localizacoes',localizationSchema)