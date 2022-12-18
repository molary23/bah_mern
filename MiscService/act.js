"use strict";

const AuditLog = require("./models/AuditLog"),
  isEmpty = require("../general/validator/isEmpty");

const act = async (Table, Action, ItemId, UserId) => {
  if (isEmpty(Table) || isEmpty(Action) || isEmpty(ItemId) || isEmpty(UserId)) {
    return;
  }

  try {
    await AuditLog.create({
      Table,
      Action,
      ItemId,
      UserId,
    });
  } catch (error) {
    return;
  }
};

module.exports = act;
