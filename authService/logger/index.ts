import { productionLogger } from "./production";
import { developmentLogger } from "./development";

let logger: any = null;
if (process.env.NODE_ENV === "production") {
  logger = productionLogger();
} else if (process.env.NODE_ENV !== "development") {
  logger = developmentLogger();
}
export { logger };
