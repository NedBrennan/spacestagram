const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelize = require('../db')
require('dotenv').config()

const User = sequelize.define("people", {
  username: {
    type: Sequelize.TEXT,
    require: true
  },
  favoritePhoto: {
    type: Sequelize.TEXT,
  },
  likes: {
    type: Sequelize.INTEGER
  }
});

module.exports = User