const Sequelize = require('sequelize')
const db = require('./database')

const City = db.define('city', {
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

// hook for adding '_' where there are ' ' for city names
City.beforeValidate(city => {
  city.name = city.name.replace(/\s/g, '_').replace(/\W/g, '').toLowerCase()
})

module.exports = City
