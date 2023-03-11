const sequelize = require('../db.js')
const {DataTypes} = require('sequelize')

const articles = sequelize.define('articles', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, unique: true, allowNull: false},
    text:{type: DataTypes.STRING, allowNull: false}
})

const comments = sequelize.define('comments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text:{type: DataTypes.STRING, allowNull: false}
})

articles.hasMany(comments, {
    onDelete: 'cascade'
})
comments.belongsTo(articles, {
    onDelete: 'cascade'
})

module.exports = {
    articles,
    comments
}