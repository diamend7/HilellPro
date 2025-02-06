const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const port = 3000;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(bodyParser.json());
app.use(cors());

const validUsername = "admin";
const validPassword = "admin";

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === validUsername && password === validPassword) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.status(200).send({ acces: "successfull", token });
  } else {
    res.status(401).send({ acces: "denied" });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
