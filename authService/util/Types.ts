import { RowDataPacket } from "mysql2";

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

export interface ResponseMessage {
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
