const Plants = require('./Plants');
const Users = require('./Users');
const Owned_Plants = require('./Owned_Plants');
const Trellis_Posts = require('./Trellis_Posts');
const Trellis_Comments = require('./Trellis_Comments');

Users.hasMany(Owned_Plants, {
    foreignKey: 'user_id',
});

Owned_Plants.belongsTo(Users, {
    foreignKey: 'user_id',
});

Users.hasMany(Trellis_Posts, {
    foreignKey: 'user_id',
});

Trellis_Posts.belongsTo(Users, {
    foreignKey: 'user_id',
});

Trellis_Posts.hasMany(Trellis_Comments, {
    foreignKey: 'post_id',
});

Trellis_Comments.belongsTo(Trellis_Posts, {
    foreignKey: 'post_id',
});

Users.hasMany(Trellis_Comments, {
    foreignKey: 'user_id',
});

Trellis_Comments.belongsTo(Users, {
    foreignKey: 'user_id',
});

module.exports = { Users, Plants, Owned_Plants, Trellis_Posts, Trellis_Comments };

