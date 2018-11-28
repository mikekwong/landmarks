const Sequelize = require('sequelize')
const db = require('./database')

const Landmark = db.define('landmark', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  neighborhood: {
    type: Sequelize.STRING,
    allowNull: false
  },
  favorite: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

// hook for adding '_' where there are ' ' for landmark names
Landmark.beforeValidate(landmark => {
  landmark.name = landmark.name
    .replace(/\s/g, '_')
    .replace(/\W/g, '')
    .toLowerCase()
})

module.exports = Landmark
