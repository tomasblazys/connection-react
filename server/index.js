const express = require("express");
const cors = require("cors");
const https = require('node:https');
const bodyParser = require("body-parser");
const fs = require("fs");
const url = require('url');




const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());


app.get("/api", (req, res) => {
  let data = fs.readFileSync(__dirname + '/data.json');
  let parsedData = JSON.parse(data);
  console.log(parsedData);
  res.json(parsedData);
});

app.post("/form", function(req, res) {

  let newData = req.body;

  // let newDataRow = [newData.ak, newData.fname, newData.lname, newData.email, newData.age];
  let data = fs.readFileSync(__dirname + '/data.json');
  let myObject = JSON.parse(data);
  //tikrinam ID duplikatu
  if (data.includes(newData.ak)) {
  //randa ID duplikata
  res.sendStatus(401);
  //res.json({ statusas: '400' });
  } else {
  //write File
  myObject.push(newData);
  let naujasJson = JSON.stringify(myObject);
  fs.writeFile(__dirname + '/data.json', naujasJson, err => {
  res.sendStatus(200);;
     });
   };
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
