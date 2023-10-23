const DB = require('./config/data_base_config');
const app = require('./app');
const userRegModel = require('./model/client_registration_model');
const port = 3000;

app.listen(port,()=>{
    console.log('Server run in port'+ port)
})