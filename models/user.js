let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String
});

export default mongoose.model('User', UserSchema);
