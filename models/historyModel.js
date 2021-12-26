const mongoose=require('mongoose');
const capturaSchema=require('./captureModel').schema;
const userSchema =require('./userModel').schema;

const historySchema=new mongoose.Schema({
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
    valorAnterior:{
        type:String,
        required:[true,'This field must be specified']
    },
    valorAtual:{
        type:String,
        required:[true,'This field must be specified']
    }
    ,
    captura:{
        type:capturaSchema,
        required:[true,'A capture must be specified']
    },
    usuario:{
        type:userSchema,
        required:[true,'A user must be specified']
    }
});

exports.schema=historySchema;
exports.History=mongoose.model('historicos_Edicao_Captura',historySchema);