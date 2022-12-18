// Bring in Models
const sequelize = require("../config/db"),
  AuditLog = require("../models/AuditLog"),
  Product = require("../models/Product"),
  User = require("../models/User"),
  Image = require("../models/Image"),
  Category = require("../models/Category");

// Define Relationsship between tables
/*
User.hasMany(Category, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Category.belongsTo(User);

User.hasMany(Product, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Product.belongsTo(User);

Category.hasMany(Product, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Product.belongsTo(Category);

Product.hasMany(Image, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Image.belongsTo(Product);

/*
User.hasOne(Profile, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Profile.belongsTo(User);

User.hasOne(Verify, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Verify.belongsTo(User);

User.hasMany(Subscription, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Subscription.belongsTo(User);

User.hasMany(Announcement, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Announcement.belongsTo(User);

User.hasMany(Payment, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Payment.belongsTo(User);

User.hasOne(Referral, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Referral.belongsTo(User);

User.hasMany(Bonus, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Bonus.belongsTo(User);

User.hasMany(Settings, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Settings.belongsTo(User);

User.hasMany(Signal, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Signal.belongsTo(User);

User.hasMany(Currency, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Currency.belongsTo(User);

Currency.hasMany(Signal, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Signal.belongsTo(Currency);

User.hasMany(Subscription, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Subscription.belongsTo(User);

Payment.hasOne(Bonus, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Bonus.belongsTo(Payment);

User.hasMany(Transaction, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Transaction.belongsTo(User);

User.hasMany(Account, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Account.belongsTo(User);

User.hasMany(Withdrawal, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Withdrawal.belongsTo(User);

User.hasMany(Forum, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Forum.belongsTo(User);

User.hasMany(ForumReply, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
ForumReply.belongsTo(User);

Forum.hasMany(ForumReply, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
ForumReply.belongsTo(Forum);

Wallet.hasMany(Account, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Account.belongsTo(Wallet);

User.hasMany(Wallet, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Wallet.belongsTo(User);

User.hasMany(Preference, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Preference.belongsTo(User);

User.hasOne(Premium, {
  onDelete: "RESTRICT",
  hooks: true,
  foreignKey: {
    allowNull: false,
  },
});
Premium.belongsTo(User);

sequelize
  .sync({ alter: true })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
*/
