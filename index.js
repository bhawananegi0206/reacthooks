require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require('path'); 

const DIST_DIR = path.join(__dirname, './dist'); 
const HTML_FILE = path.join(DIST_DIR, 'index.html');

// create express app
const app = express();

  app.use(cors());


// parse requests of content-type - application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
 app.use(bodyParser.json())
 app.use(express.static(DIST_DIR)); 

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
   });


// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});




