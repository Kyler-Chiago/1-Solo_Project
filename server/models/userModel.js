const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
* Hint: Why is bcrypt required here?
*/
// salt work factor of 10 is pretty common for a good balance of security and time
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

// Running a function before the document is saved to the collection. Hashing the password using bcrypt
// within the function

userSchema.pre('save', async function(next) {
  try {
    const hash = await bcrypt.hash(this.password, SALT_WORK_FACTOR);
    this.password = hash;
    return next();
  } catch (err) {
    return next(err);
  }
})

module.exports = mongoose.model('User', userSchema);