import { allowedOrigins } from "./allowedOrigins";

export const corsOptions = {
  origin: (origin: string, callback: any) => {
    if (
      allowedOrigins.indexOf(origin) !==
        -1 /* Remove this part before Production*/ ||
      !origin
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
