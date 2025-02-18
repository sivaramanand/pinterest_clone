import express from "express";
import dontenv from "dotenv";
import userRoutes from "./routes/UserRoutes.js";
import { connectDb } from "./database/db.js";
const app = express();

const port = 5000;

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log("Server is runnining on ports ", port);
  connectDb();
});
