const express = require("express");
const app = express();
// const cors = require("cors");
const expenses = require("./routes/expenses");
const connectDB = require("./db/connect");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
require("dotenv").config();

app.use(express.json());

// app.use(cors());
app.use("/api/v1/expenses", expenses);

const port = process.env.PORT || 3001;

const start = async () => {
  try {
    const conn = await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server running in dev mode ${port}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
