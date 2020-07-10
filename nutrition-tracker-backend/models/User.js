const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  trackedmeal: [
    {
      name: {
        type: String,
        required: true,
      },
      calories: {
        type: Number,
        required: true,
      },
      energy: {
        type: Number,
        required: true,
      },
      fat: {
        type: Number,
        required: true,
      },
      carbs: {
        type: Number,
        required: true,
      },
      protein: {
        type: Number,
        required: true,
      },
    },
  ],
})

module.exports = User = mongoose.model("user", UserSchema)
