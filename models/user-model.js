const Sequelize = require('sequelize'); //table
const sequelize = require('../util/sequelize'); //connected object

const User =sequelize.define('users', {
    name: {type: Sequelize.STRING},
    email:{type: Sequelize.STRING},
    password: {type: Sequelize.STRING},
    ispremiumuser: {type: Sequelize.BOOLEAN, defaultValue: false},
    total: {type: Sequelize.INTEGER, defaultValue: 0}

    }, 
    { timestamps: false} //disables createdat and updatedat
)

module.exports = User;
