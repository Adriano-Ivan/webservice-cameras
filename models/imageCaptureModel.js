const mongoose = require('mongoose');
const captureSchema=require('./captureModel').schema;

const imageSchema=new mongoose.Schema({
    imagem:{
        type: String,
        required:[true,'An image must be specified']
    },
    captura:{
        type:captureSchema,
        required:[true,'A capture must be specified']
    }
});

exports.schema=imageSchema;
exports.Image=mongoose.model('ImagensCaptura',imageSchema);