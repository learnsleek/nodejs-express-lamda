var http = require('http');
var api = require(process.cwd() + '/controller/controller.js');

//create a server object:
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'}); // http header
	res.setHeader('isBase64Encoded')
	var url = req.url;
	if(url ==='/getcolor'){    
          api.controller(req, res);
	}else if(url ==='/contact'){
  		res.write('<h1>contact us page<h1>'); //write a response
  		res.end(); //end the response
	}else{
  		res.write('<h1>Hello World!<h1>'); //write a response
  		res.end(); //end the response
	}

}).listen(4000, function(){
	console.log("server start at port 4000"); //the server object listens on port 4000
});