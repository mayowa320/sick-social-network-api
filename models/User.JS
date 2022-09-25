const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
    unique: true,
    trim: true,
  },
  email: {
    required: true,
    type: String,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[^@\s]+@[a-zA-Z]+\.(\.|[^@\s])+$/.test(value);
      },
      message: (props) => "email is not valid",
    },
  },
});
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:mayowa320/sick-social-network-api.git
git push -u origin main