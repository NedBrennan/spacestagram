const Sequelize = require('sequelize')
const pkg = require('../../package.json')
require('dotenv').config()

const db = new Sequelize(
    `postgres://me:${process.env.PASSWORD}@localhost:${process.env.PORT}/space`
)

module.exports = db
