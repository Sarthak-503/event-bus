const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(bodyParser.json()); // associating body-parser middleware in the app
app.use(cors());
// Implement this endpoint to watch for incoming events
app.post("/events", (req, res) => {
  const event = req.body; // json , string ,anything
  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message);
  });
  // these endpoint are postsService, commentsService, queryService
  res.send({
    status: "Ok",
  });
});

app.listen(4005, () => {
  console.log("Server is working on 4005");
});
