const express = require('express');
const app = express();

const user = require('./Controllers/UserController')
const product = require('./Controllers/ProductController')
const teacher = require('./Controllers/TeacherController')


var router = require("express").Router();

var bodyParser = require('body-parser');  

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1/TEST_DATABASE')
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Database Connectivity Error", error);
    process.exit(1);
  });

app.use("/", router);

// --------------For User---------------------//


router.post('/updateUser',(request,response) => {
  console.log("req", request.body)
 // user.createUser(request.body)
 user.updateUser(request.body)
  //user.deleteUser(request.body)
  response.send("SUCCESS")
});

//------------------FOr Product----------------//


router.post('/deleteProduct',(request,response) => {
  console.log("req", request.body)
//  product.createProduct(request.body)
// product.updateProduct(request.body)
  product.deleteProduct(request.body)
  response.send("SUCCESS")
});

//------------------FOr Teacher----------------//


router.post('/createTeacher',(request,response) => {
  console.log("req", request.body)
 teacher.createTeacher(request.body)
// teacher.updateTeacher(request.body)
  // teacher.deleteTeacher(request.body)
  response.send("SUCCESS")
});



app.listen(8080, ()=>{
  console.log("Listening to port 8080")
})