const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: String,
    email: String,
    thoughts: Array,
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `username ` that gets the amount of comments per user
userSchema
  .virtual('username')
  // Getter
  .get(function () {
    return ` ${this.username}`;
  })
  // Setter to set the username and email
//   .set(function (v) {
//     const username = v.split(' ')[0];
//     const email = v.split(' ')[1];
//     this.set({ username, last });
//   });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
