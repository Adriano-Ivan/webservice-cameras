const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: [true, "A user must has a name"],
    },
    email: {
      type: String,
      required: [true, "A user must has a email"],
      unique: true,
    },
    senha: {
      type: String,
      required: [true, "A user must has a password"],
    },
    isEmailVerificado: {
      type: Boolean,
      required: [
        true,
        "An email must has an indication of confirmation or without confirmation",
      ],
    },
    token: {
      type: String,
      required: [true, "A token must be specified"],
    },
    isAtivo: {
      type: Boolean,
      required: [true, "A user must has an indication of activity"],
    },
    permissao: {
      type: String,
      required: [
        true,
        "An email must has an indication of confirmation or without confirmation",
      ],
    },
    version: {
      type: Number,
      required: [true, "A user must has a version"],
    },
    createdAt: {
      type: Date,
      required: [true, "A date of creation must be specified"],
    },
    updatedAt: {
      type: Date,
      default: null,
    },
  });
  
  exports.schema = userSchema;
  exports.User = mongoose.model("Usuarios", userSchema);
  
