import { Secret } from "jsonwebtoken";

export type DBObject = {
  DBNAME: string | undefined;
  DBHOST: string | undefined;
  DBUSER: string | undefined;
  DBPASS: string | undefined;
};

export type DBEnv = {
  development: DBObject;
  test: DBObject;
  production: DBObject;
};

export interface RegularObject {
  [index: string]: string;
}

export enum DBStatus {
  "a",
  "i",
}
export type DBUser = {
  email: string;
  username: string;
  phone: number | string;
  password: string;
  level: number;
  status: DBStatus;
};

export type IUser = [
  {
    [index: string]: string | number;
  }
];

export type CookieObject = {
  httpOnly: boolean;
  sameSite: boolean | "strict" | "lax" | "none" | undefined;
  secure: boolean;
  maxAge?: number;
};

export const ACCESS_SECRET_KEY: Secret = process.env.ACCESS_TOKEN_SECRET_KEY!;
export const REFRESH_SECRET_KEY: Secret = process.env.REFRESH_TOKEN_SECRET_KEY!;
