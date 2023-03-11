const api_error = require('../error/api_error.js');
const { comments }= require('../models/models.js');
const {Op} = require('sequelize')

class analytic_controller{
    async analytic(req, res, next){
        const {dataFrom, dataTo} = req.query
        res.json(await comments.findAll({
            where:{createdAt:{
                [Op.gte]:dataFrom,
                [Op.lte]:dataTo
                }
               
        }}))
        
    }
}

module.exports = new analytic_controller()