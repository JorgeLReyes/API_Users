import "dotenv/config";
import express from "express";
import routes from "./routes/routes.js";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(3000, () => console.log("http://localhost:3000"));
