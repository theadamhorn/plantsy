const Plants = require('./Plants');
const Users = require('./Users');
const Owned_Plants = require('./Owned_Plants');

// Not sure if this is correct

Users.hasMany(Owned_Plants, {
    foreignKey: 'user_id',
});

Owned_Plants.belongsTo(Users, {
    foreignKey: 'user_id',
});



module.exports = { Users, Plants, Owned_Plants };

