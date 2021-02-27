import express, { Request, Response } from "express";
import userRoute from "./routes/userRoute";

const app = express();
const port = 8080 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/users", (req: Request, res: Response) => userRoute);

app.listen(port, () => {
  console.log(`Server started | PORT: ${port}`);
});
