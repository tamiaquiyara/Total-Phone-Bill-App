let express = require('express');
// const flash = require('express-flash');
// const session = require('express-session');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
// const Greeting = require('./greet');


const app = express();

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get("/", function (req, res) {
    res.render("index");
});


app.post("/calc_bill", function (req, res) {
    res.redirect("/");
});


app.get("/price_plan", function (req, res) {
    res.redirect("/");
});


app.get("/price_plan/:id", function (req, res) {
    res.redirect("/");
});



app.get("/user", function (req, res) {
    res.redirect("/");
});



app.post("/link_user", function (req, res) {
    res.redirect("/");
});

let PORT = process.env.PORT || 3004;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});