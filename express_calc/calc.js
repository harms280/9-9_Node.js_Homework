var express = require('express'), app = express();

app.set('view engine', 'ejs');

app.get("/:op/:num1/:num2", function(req,res) {
  if(req.params.op === "add") {
    var sum = parseInt(req.params.num1) + parseInt(req.params.num2);
    res.render('index',{answer: sum.toString()});
  } else if (req.params.op === "sub") {
    var sub = parseInt(req.params.num1) - parseInt(req.params.num2);
    res.render('index',{answer: sub.toString()});
  } else if (req.params.op === "mult") {
    var mult = parseInt(req.params.num1) * parseInt(req.params.num2);
    res.render('index',{answer: mult.toString()});
  } else if (req.params.op === "div") {
    var div = parseInt(req.params.num1) / parseInt(req.params.num2);
    res.render('index',{answer: div.toString()});
  } else {
    res.render('index', {answer: "That ain't right"});
  }
});

app.listen(3000, function(){
  console.log("Go to localhost:3000");
});