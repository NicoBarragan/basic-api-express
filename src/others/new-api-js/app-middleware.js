const express = require("express");
const bodyParser = require('body-parser');  
const app = express();
const port = 3000;
const usersRouter = express.Router()
const productsRouter = express.Router()

let users = [{id: 1, name: "User Userson",},] 
let products = [{brand: "Ford", model: "Focus", year: 2022}]

function isAuthorized(req, res, next) {
  const auth = req.headers.authorization;
  if (auth === 'secretpassword') {
    next();
  } else {
    res.status(401);
    res.send('Not permitted');
  }
}


app.get("/", (req, res) => res.send("Hello World!"));

usersRouter.get("/users", isAuthorized, (req, res) => {
  res.json(users);
});

var urlencodedParser = bodyParser.urlencoded({ extended: false })  

usersRouter.post('/users', urlencodedParser, function (req, res) {
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

productsRouter.get("/products", isAuthorized, (req, res) => {
  res.json(products);
});

app.use(usersRouter);
app.use(productsRouter);

app.listen(port, (err) => {
  if (err) console.error(err);
  console.log(`Example app listening on port ${port}!`)
});