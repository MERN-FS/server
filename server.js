const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//create a db connection -> u can also
//create a separate file for this and import it here

mongoose
  .connect("mongodb+srv://santoshk6r:kumar123@merncluster.i3ttu4d.mongodb.net/")
  .then(() => console.log("Connection Established"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    method: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`server is now running on port ${PORT}`));
