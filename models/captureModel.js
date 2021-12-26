const mongoose=require('mongoose');
const monitoringSchema=require('./monitoringModel').schema;
const cameraSchema=require('./cameraModel').schema;

const captureSchema=new mongoose.Schema({
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
    placa:{
        type:String,
        required:[true,'A number plate must be specified']
    },
    dataHora:{
        type:Date,
        required:[true,`The capture time must be specified`]
    },
    detalhes:{
        type:[String],
        default:null
    },
    monitoramento:{
        type:monitoringSchema,
        required:[true,'A monitoring must be specified']
    },
    camera:{
        type:cameraSchema,
        required:[true,'A camera must be specified']
    }
});

exports.schema=captureSchema;
exports.Capture=mongoose.model('Capturas',captureSchema)