var api = require(process.cwd() + '/controller/controller.js');
exports.handler = async function (event, context, callback) {
     
     console.log("Colors :: ", api.controller());
     var res = await api.controller();
     callback(null, {
      statusCode: 200,
      body: res
      });
    
 };