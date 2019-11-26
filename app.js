require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();

const hbs = require("hbs");
const logger = require("morgan");

require("./configs/mongoose.config");
require("./configs/middlewares.config")(app);
require("./configs/locals.config")(app);
require("./configs/passport.config")(app);

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

hbs.registerHelper("ifUndefined", (value, options) => {
  if (arguments.length < 2)
    throw new Error("Handlebars Helper ifUndefined needs 1 parameter");
  if (typeof value !== undefined) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

const index = require("./routes/index");
app.use("/", index);

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const apiRoutes = require("./routes/api/addCard");
app.use("/api", apiRoutes);

module.exports = app;
