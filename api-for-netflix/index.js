const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("DB connection successfull"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);

const port = 2000;
app.listen(port, () => {
  console.log(`backend is runnning on ${port}`);
});
