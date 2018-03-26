const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4500;


app.use(express.static('server/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(port, ()=> {
    console.log('active on port', port);
})