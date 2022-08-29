require("dotenv").config();
const controllers = require("./controllers");
const { PORT = 4000 } = process.env;
const cors = require("cors");
const morgan = require("morgan");

const express = require("express");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.originalUrl}`);
//     next();
//   });
app.use("/posts", controllers.post);
app.get("/", (req, res) => {
  res.send("Please send a valid request.");
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
