var express = require('express');
var router = express.Router();

/* GET  */
router.get('/', function(req, res, next) {
	//#1 create KP session
	//#2 creat KP HPP

	res.setHeader('Content-Type', 'application/json');


	var response = {
	  "responseCode": "Ok",
	  "pspReferenceId": "",
	  "timestamp": "2017-11-30T13:15:39.942Z",
	  "paymentMethodBrandResponseCode": "string",
	  "paymentMethodBrandResponseMessage": "string",
	  "redirectionUrl": "string"
	}
    
    res.send(JSON.stringify(response));

});

//reg.params.paymentId

module.exports = router;
