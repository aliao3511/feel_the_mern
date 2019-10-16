const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const db = require("./config/keys").mongoURI;
const passport = require('passport');

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("mongoDB connected successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MIDDLEWARE
app.use(passport.initialize());
require('./config/passport.js')(passport);

// ROUTES
// app.get("/", (req, res) => res.send("we out here"));
app.use('/api/users', users);
app.use('/api/tweets', tweets);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));