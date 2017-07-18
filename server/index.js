const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const mc = require( __dirname + '/controllers/messages_controller');
console.log( mc.create, __dirname )

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));


app.listen(3000, ()=> {
    console.log("Server listening on port 3000");
})


const messageBaseUrl = "/api/messages";

app.post( messageBaseUrl, mc.create);
app.get( messageBaseUrl, mc.read);
app.put( `${messageBaseUrl}/:id`, mc.update);
app.delete( `${messageBaseUrl}/:id`, mc.delete);

