import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import express, { Application } from "express";
import { userRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";
import { postRoutes } from "./routes/post.routes";
import { threadRoutes } from "./routes/threads.routes";
import { followRoutes } from "./routes/followers.routes";
export const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/post", postRoutes);
app.use("/threads", threadRoutes);
app.use("/follow", followRoutes);