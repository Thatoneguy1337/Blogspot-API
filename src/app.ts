import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import express, { Application } from "express";
import { userRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";


export const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/user", userRoutes);
app.use("/login", loginRoutes);
