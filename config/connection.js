const { connect, connection } = require('mongoose');

connect('mongodb://localhost/usernameVirtual', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
