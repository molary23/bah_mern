"use strict";

const whitelist = ["http://127.0.0.1", "http://localhost"],
  corsOptions = {
    origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    optionsSuccessStatus: 200,
  };

module.exports = corsOptions;
