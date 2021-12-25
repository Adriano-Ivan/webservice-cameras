const mongoose=require('mongoose');
const userSchema=require('./userModel').schema;

const monitoringSchema = new mongoose.Schema({
    createdAt:{
        type:Date,
        required:[true, "A date of creation must be specified"]
    },
    updatedAt:{
        type:Date,
        default:null
    },
    version:{
        type:Number,
        required:[true, "A monitoring must has a version"]
    },
    placa:{
        type:String,
        required:[true,'A number plate must be specified']
    },
    dataInicio:{
        type: Date,
        required:[true,'A date must be specified']
    },
    dataFim:{
        type:Date,
        default:null,
    },
    observacoes:{
        type:[String],
        default: null
    },
    isContinuo:{
        type:Boolean,
        required:[true, 'A boolean value must be specified' ]
    },
    usuario:{
        type:userSchema,
        required:[true,'A user must be specified']
    }
})

exports.schema=monitoringSchema;
exports.Monitoring=mongoose.model('Monitoramentos',monitoringSchema);