const { Schema, model } = require("mongoose");

const TodoSchema = Schema({
  text: {
    type: String,
    require: true,
  },
});

module.exports = model("Todos", TodoSchema);
