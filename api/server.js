const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
const wtfRouter = require("../wtf/wtf-router");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", wtfRouter);
server.get("/", (req, res) => {
  res.send(`<h1>World Texting Foundation API</h1>`);
});

module.exports = server;