const express = require("express");
const connectDB = require("/app/app.js/config/db.js");
const cors = require("cors");

// routes
const contacts = require("./routes/api/contacts");

const app = express();
// CORS set header to allow all complex requests
app.options("*", cors());

// cors origin URL - Allow inbound traffic from origin
corsOptions = {
  origin: "https://portfoliofrontend.herokuapp.com",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
// Connect Database
connectDB();

//  Middleware
app.use(express.json({ extended: false }));
// app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.json({ success: true });
// });

app.use("/api/contacts", contacts);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
