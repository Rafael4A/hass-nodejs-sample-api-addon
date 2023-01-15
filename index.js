console.log("Starting Sample Api");

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

app.listen(3001, () => {
  console.log(`Sample API is up and running`);
});
