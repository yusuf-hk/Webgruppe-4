const express = require("express");
const mysql = require("mysql");

const frontPageRouter = require("./routes/frontPage.js")


const app = express();

// configs
const dbConfig = require("./config/my_sql_config.json")

app.set("port", 3000);
app.set("view engine", "pug");
app.set("views", "./views");
app.use("/", express.static("./public"));

// url routing
app.use("/", frontPageRouter);
app.locals.pretty = true; // pritty prints the html file slover but kind of loks better


// conects to the mySQL database
var con = mysql.createConnection(dbConfig);

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to Database");
});


app.get('/admin', (req, res) => res.send("dupdidu"));

app.listen(app.get('port'), () => console.log(`Example app listening on port ${app.get('port')}!`))