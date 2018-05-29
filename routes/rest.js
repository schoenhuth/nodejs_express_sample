var express = require('express');
var router = express.Router();

/* GET  */
router.get('/:paymentId/captures', function(req, res, next) {
	//#1 create KP session
	//#2 creat KP HPP

	res.setHeader('Content-Type', 'application/json');


	var response = {
	  "responseCode": "Ok",
	  "pspReferenceId": req.params.paymentId,
	  "timestamp": "2017-11-30T13:15:39.942Z",
	  "paymentMethodBrandResponseCode": "string",
	  "paymentMethodBrandResponseMessage": "string",
	  "redirectionUrl": "string"
	};
    
    res.send(JSON.stringify(response));

});

module.exports = router;
