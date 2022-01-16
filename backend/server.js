require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/api", require("./routes/parentRoute/tokenRouter"));
app.use("/api", require("./routes/studentRoute/tokenRouter"));
app.use("/api", require("./routes/instructorRoute/tokenRouter"));
app.use("/api", require("./routes/uploadRoute/uploadRoute"));
app.use("/api", require("./routes/courseRoute/courseRoute"));
app.use("/api", require("./routes/courseRoute/taskRoute"));
app.use("/api", require("./routes/courseRoute/lessonRoute"));
app.use("/api/parent", require("./routes/parentRoute/authRouter"));
app.use("/api/student", require("./routes/studentRoute/authRoute"));
app.use("/api/instructor", require("./routes/instructorRoute/authRouter"));
app.use("/api/admin", require("./routes/adminRoute/adminRoute"));
app.use("/api/admin", require("./routes/adminRoute/courseCategoryRoute"));

const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("DATABASE CONNECTED...");
  }
);

app.listen(PORT, () => {
  console.log(`SERVER IS CONNECTED TO PORT ${PORT}`);
});
