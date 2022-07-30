const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String, 
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    }
    lastAccessed
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
