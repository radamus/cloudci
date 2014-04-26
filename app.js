var AWS = require("aws-sdk");

var S3 = new AWS.S3();

S3.getObject({Bucket:"deploy-weeia", Key:"radek/package.json"}, 
		function(err, result){
			if(err){
				console.log(err);
			}else {
				console.log(result);
			}
});