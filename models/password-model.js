const Sequelize = require('sequelize');
const sequelize = require('../util/sequelize');

const Resetpassword = sequelize.define('resetpassword', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    
active: Sequelize.BOOLEAN,
expireby: Sequelize.DATE

})

module.exports = Resetpassword;