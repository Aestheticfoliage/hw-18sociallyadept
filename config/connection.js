const { connect, connection } = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/usersDB'
, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
