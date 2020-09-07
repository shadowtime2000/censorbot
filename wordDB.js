const Endb = require("endb");
require("dotenv").config();

module.exports = new Endb(`sqlite://${process.env.WORDDBLOC}`);