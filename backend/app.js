const express = require("express");
const cors = require('cors');  
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
  };
  
app.use(cors({ credentials: true , origin: true, corsOptions} ));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const errorMiddleware = require("./middleware/error");

//Routes imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

app.use("/", product);

app.use(errorMiddleware);

module.exports = app