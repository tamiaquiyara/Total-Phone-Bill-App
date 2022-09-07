let express = require('express');
// const flash = require('express-flash');
// const session = require('express-session');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const PhoneBill = require('./price_plan');


const app = express();
const phonebill = PhoneBill();

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


app.get("/calc_bill", function (req, res) {
    // let user = req.body.userName;
    let usage = req.body.string;
    let totalBill

    totalBill = phonebill.total(usage);
    res.render("index", {
        total: totalBill
    });
});


app.get("/price_plan", function (req, res) {
    res.render("priceplan");
});


app.get("/price_plan/:id", function (req, res) {
    console.log(phonebill.getUsers());
    let usersLinked = phonebill.getUsers()
    res.render("users",
        usersLinked
    );
});



app.get("/link_user", function (req, res) {
    res.redirect("/");
});



app.post("/link_user", function (req, res) {
    res.redirect("/");
});

let PORT = process.env.PORT || 3004;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});