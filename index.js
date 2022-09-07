let express = require('express');
let app = express();

app.get("/", function(req, res){
  res.send("Total PhoneBill WebApp");
});

let PORT = process.env.PORT || 3004;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});