const express = require('express');
const router = express.Router();
const sendingsEndpointController = require('./../controllers/sendingsEndpointController');

router
    .route('/')
    .post(sendingsEndpointController.captureSendings)
    .get(sendingsEndpointController.captureSendingsGet)

module.exports=router;