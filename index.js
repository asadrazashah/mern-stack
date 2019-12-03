const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

//routes connecting to job route
const jobs = require("./routes/api/jobs");
//route connecting to the user route
const users = require("./routes/api/user");
//route connecting to the contact route
// const contact = require("./routes/api/contact");

// Adding json checking middleware
const withAuth = require("./middleware/middleware");

//db
const db = require("./config").mongoURI;
//using cors
app.use(cors());

//BodyParser Middelware
app.use(bodyParser.json());

//using cookie Parser
app.use(cookieParser());

//Additional code

/*Adds the react production build to serve react requests*/
app.use(express.static(path.join(__dirname, "./client/build")));
/*React root*/

//connecting to moongo db
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("moongose connected"))
  .catch(err => console.log(err));

//Use Routes
app.get("/checkToken", withAuth, function(req, res) {
  res.sendStatus(200);
});
app.use("/api/jobs", jobs);
app.use("/api/users/", users);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
// app.use("/api/contact", contact);

//assigning port the server
const port = process.env.PORT || 5000;

//listening to the server
app.listen(port, function() {
  console.log("green server started on " + port);
});
