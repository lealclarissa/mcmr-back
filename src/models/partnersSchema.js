const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const partnersSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    category: { type: Array, required: true } 
  },
  {
    versionKey: false,
  }
);

const partnersModel = mongoose.model("partners", partnersSchema);

module.exports = { partnersModel };