const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  app: {},
  checkout: {},
  products: {},
  carts: {},
});

module.exports = mongoose.models.Order || mongoose.model("Order", OrderSchema);
