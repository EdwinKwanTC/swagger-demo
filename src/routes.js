const bodyParser = require("body-parser");
const express = require("express");

module.exports = function router() {
  const router = express.Router();
  const jsonParser = bodyParser.json();

  router.get("/", (req, res) => {
    res.send("Hello World!");
  });

  router.post("/hello", jsonParser, (req, res) => {
    const { name } = req.body;
    res.send(`Hello ${name}!`);
  });

  router.put("/hello/:name", jsonParser, (req, res) => {
    const { name } = req.params;
    res.send(`Hello ${name}!`);
  });

  return router;
};
