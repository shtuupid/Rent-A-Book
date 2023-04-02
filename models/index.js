const User = require('./User');
const Books = require('./Books');

Books.hasOne(User,
    {
        foreignKey: 'user_id',
    });

module.exports = { User, Books};