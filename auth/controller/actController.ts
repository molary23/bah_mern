import { AuditLogs } from "../models/AuditLog";
import isEmpty from "../util/validator/isEmpty";

const act = async (
  table: string,
  action: string,
  itemId: number,
  userId: number
) => {
  if (isEmpty(table) || isEmpty(action) || isEmpty(itemId) || isEmpty(userId)) {
    return;
  }

  try {
    await AuditLogs.create({
      table,
      action,
      itemId,
      userId,
    });
  } catch (error) {
    return;
  }
};

export { act };
