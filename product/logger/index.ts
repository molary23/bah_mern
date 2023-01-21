import { productionLogger } from "./production";
import { developmentLogger } from "./development";

let logger: any = null;
if (process.env.NODE_ENV === "production") {
  logger = (filename: string) => productionLogger(filename);
} else if (process.env.NODE_ENV !== "development") {
  logger = (filename: string) => developmentLogger(filename);
}
export { logger };
