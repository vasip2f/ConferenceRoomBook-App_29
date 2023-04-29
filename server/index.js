const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors("https://conference-room-booking-fnd.onrender.com"));
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const user = require("./router/user");
InitiateMongoServer();
app.use(express.json());
const EventRoute = require('./router/EventRoutes');
app.use('/', EventRoute);
const EventTimeSlotRoute = require('./router/EventTimeSlotRoute');
app.use('/', EventTimeSlotRoute)





// middleware
// const corsOptions = {
//   origin:"https://conference-room-booking-fnd.onrender.com"
// }

app.use(bodyParser.json());


// PORT
const PORT = 4000;

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

// router

app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
