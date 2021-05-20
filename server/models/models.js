const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Order = sequelize.define('order', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Product = sequelize.define('product', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  weight: {type: DataTypes.INTEGER, allowNull: false},
  struct: {type: DataTypes.STRING, allowNull: false},
  sale: {type: DataTypes.INTEGER, allowNull: true},
  img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

User.hasOne(Basket);
Basket.belongsTo(User);

Type.hasMany(Product);
Product.belongsTo(Type);

Basket.hasMany(Order);
Order.belongsTo(Basket);

Product.hasMany(Order);
Order.belongsTo(Product);

module.exports = {
  User,
  Basket,
  Product,
  Order,
  Type
}