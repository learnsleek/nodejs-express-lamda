const express = require('express')
const app = express()
const port = 3000
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var api = require(process.cwd() + '/src/controller/controller.js');
app.use(awsServerlessExpressMiddleware.eventContext())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/getcolor', (req, res) => {
    api.controller().then(respon => {
        console.log(respon);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(respon);
        res.end();
    })});
    

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app