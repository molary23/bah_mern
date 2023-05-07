import { allowedOrigins } from "./allowedOrigins";

export const corsOptions = {
  origin: (origin: string, callback: any) => {
    console.log("Cors Options", origin);
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
