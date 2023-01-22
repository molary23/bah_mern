import { Secret } from "jsonwebtoken";
import { Request } from "express";

export type DBObject = {
  DBNAME: string | undefined;
  DBHOST: string | undefined;
  DBUSER: string | undefined;
  DBPASS: string | undefined;
  dialect?: string | undefined;
};

export type DBEnv = {
  development: DBObject;
  test: DBObject;
  production: DBObject;
};

export interface RegularObject {
  [index: string]: string | number;
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

export interface IGetUserAuthInfoRequest extends Request {
  id: number;
  username?: string;
  level?: string; // or any other type
  files?: RegularObject | any;
}

export type NestedRegularObject = {
  [index: string]: {
    [index: string]: string | number;
  };
};

export type ProductObject = {
  id?: number;
  productName: string;
  productModel: string;
  productQuantity?: number;
  productDescription?: string;
  status: string;
  CategoryId?: number | any;
  UserId?: number;
};

export const Err: RegularObject = {};
export const Message: RegularObject = {};

export const ACCESS_SECRET_KEY: Secret = process.env.ACCESS_TOKEN_SECRET_KEY!;
export const REFRESH_SECRET_KEY: Secret = process.env.REFRESH_TOKEN_SECRET_KEY!;

export enum statusEnum {
  "a",
  "d",
}

export enum levelEnum {
  "a",
  "m",
}
