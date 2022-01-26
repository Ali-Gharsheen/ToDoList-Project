const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
// console.log(date.getDate);
const items = ["Buy Food","Cook Food","Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  const day = date.getDate();
  res.render('list', {listTitle: day , items: items});
});

app.post("/",function(req,res){
  if(req.body.checkList === "Work List"){
    const workItem = req.body.addItem;
    workItems.push(workItem);
    res.redirect("/work");
  }else{
    const newItem = req.body.addItem;
     items.push(newItem);
     res.redirect("/");
  }
});

app.get("/work",function(req,res){
  res.render('list',{listTitle: "Work List", items: workItems});
});

app.get("/about",function(req,res){
  res.render('about');
});

app.listen("3000", function() {
  console.log("server started at port 3000");
});
