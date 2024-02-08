const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  pic: {
    type: String,
    required: true,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5jdypRAox2mAT9SpG-NKQ5jllm-Qvd9aI9aOdWA3216FZFyM&s",
  },
},
{
    timestamps:true,
}
);

const User = mongoose.model("User", userSchema);
module.exports = User;