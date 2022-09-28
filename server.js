require("dotenv").config();
const postRoutes = require("./routes/post")
const userRoutes = require("./routes/user")
const { PORT = 4000 } = process.env;
const cors = require("cors");
const morgan = require("morgan");

const express = require("express");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Please send a valid request.");
});

app.use("/posts", postRoutes);
app.use("/user", userRoutes )

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
