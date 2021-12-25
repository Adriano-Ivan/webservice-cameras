const mongoose = require('mongoose');
const localizationSchema = require('./localizationModel').schema;

const cameraSchema=new mongoose.Schema({
    createdAt:{
        type: Date,
        required:[true,' "A date of creation must be specified"']
    },
    updatedAt:{
        type: Date,
        default:null
    },
    version:{
        type:Number,
        required:[true,'A number version must be specified']
    },
    nome:{
        type:String,
        required:[true,'A name must be specified']
    },
    mac:{
        type:String,
        required:[true,'The MAC must be specified']
    },
    observacoes:{
        type:[String],
        default:null
    },
    localizacao:{
        type: localizationSchema,
        required:[true,'A localization must be specified']
    }
})

exports.schema=cameraSchema;
exports.Camera=mongoose.model('Cameras',cameraSchema);