const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute= require("./routes/users")
const authRoute= require("./routes/auth")
const postRoute= require("./routes/posts")
dotenv.config();
const PORT = process.env.PORT;
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("data base is connected");
  } catch (error) {
    console.log("data base can not connected");
  }
};
connectDB();
//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users",userRoute)
app.use("/api/auth", authRoute)
app.use("/api/post", postRoute)

app.listen(PORT, () => {
  console.log(`backend server is running on ${PORT}`);
});
