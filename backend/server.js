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
app.use(
  cors({
    origin: ["http://localhost:3000", "https://elearn-bd.web.app"],
    credentials: true,
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// public route
app.use("/api", require("./routes/parentRoute/tokenRouter"));
app.use("/api", require("./routes/studentRoute/tokenRouter"));
app.use("/api", require("./routes/instructorRoute/tokenRouter"));
app.use("/api", require("./routes/uploadRoute/uploadRoute"));
app.use("/api", require("./routes/courseRoute/courseRoute"));
app.use("/api", require("./routes/courseRoute/taskRoute"));
app.use("/api", require("./routes/courseRoute/lessonRoute"));
// parent route
app.use("/api/parent", require("./routes/parentRoute/authRouter"));
//student route
app.use("/api/student", require("./routes/studentRoute/authRoute"));
// instructor route
app.use("/api/instructor", require("./routes/instructorRoute/authRouter"));
// admin route
app.use("/api/admin", require("./routes/adminRoute/adminRoute"));
app.use("/api/admin", require("./routes/adminRoute/courseCategoryRoute"));
app.use("/api/admin", require("./routes/adminRoute/blogCategoryRoute"));
app.use("/api/admin", require("./routes/adminRoute/blogRoute"));
app.use("/api/admin", require("./routes/adminRoute/jobRoute"));

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`SERVER IS CONNECTED TO PORT ${PORT}`);
});
