import { AuditLogs } from "../models/AuditLog";
import isEmpty from "../util/validator/isEmpty";

const act = async (
  table: string,
  Action: string,
  ItemId: number,
  UserId: number
) => {
  if (isEmpty(table) || isEmpty(Action) || isEmpty(ItemId) || isEmpty(UserId)) {
    return;
  }

  try {
    await AuditLogs.create({
      table,
      Action,
      ItemId,
      UserId,
    });
  } catch (error) {
    console.log(error);
  }
};

export { act };
