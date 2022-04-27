const express = require("express");
const bodyParser = require('body-parser');  

let users = [{id: 1, name: "User Userson",},] 

function isAuthorized(req, res, next) {
  const auth = req.headers.authorization;
  if (auth === 'secretpassword') {
    next();
  } else {
    res.status(401);
    res.send('Not permitted');
  }
}

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", isAuthorized, (req, res) => {
  res.json(users);
});

var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.post('/users', urlencodedParser, function (req, res) {
  let user = req.body; 
  
  if (!user) {
    return res.send('Cannot update null values');
  }
  
  users.push(user);
  console.log("Updated new user")
  return res.send('User has been added successfully');

  // if (Object.keys(user) in Object.keys(users[0])) {
  //   users.push(user);
  //   return res.send('User has been added successfully');
  // } 
  
  // const error = new Error("User has not been found")
  // return res.send(error);

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
