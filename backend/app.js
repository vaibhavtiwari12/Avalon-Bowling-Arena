const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
/* const { controller } = require('./Mongo/mongoController'); */
const BowlingRouter = require("./Router/bowlingRouter");

//Conifiguring the dotenv to read the env file variables.
dotenv.config({ path: path.resolve(__dirname, "../.env.prod") });

const app = express();
app.listen(process.env.NODE_PORT);
console.log(`Server Listening on ${process.env.NODE_PORT}`);

//Creating the build folder path to server static resource from build.
app.use(express.static(path.join(__dirname, "build")));

//Enable JSON POST REQUEST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* app.use("/mongo", MongoRouter); */
app.use("/api/bowling", BowlingRouter);

app.get("/api/getName", (req, res) => {
  res.send({ message: "hello From API" });
});

app.get("/api/heartbeat", (req, res) => {
  console.log(process.env.NODE_PORT);
  res.send({ message: "Backend Application is alive." });
});

// ALL the API Calls Get Here
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
