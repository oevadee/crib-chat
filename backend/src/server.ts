import express, { Request, Response } from "express";
import userRoute from "./routes/userRoute";
import cors from "cors";
import config from "./config";

const app = express();

//options for cors midddleware
const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "http://localhost:3000",
  preflightContinue: false,
};

//use cors middleware
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("hello wrld");
});

app.listen(config.port, () => {
  console.log(`Server started | ${config.server}`);
});
