import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { getAllDevjobs, jobPost } from "./controllers/project-controller.js";

dotenv.config();

connect();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "app works" });
});

app.get("/api/devjobs", getAllDevjobs);
app.post("/api/postjob", jobPost);

app.listen(3000);
