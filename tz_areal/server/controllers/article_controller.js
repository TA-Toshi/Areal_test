const api_error = require('../error/api_error.js');
const {articles} = require('../models/models.js');

class article_controller{
    async article_add(req, res){
        const {title, text} = {title:req["body"]["title"],text:req["body"]["text"]}
        await articles.create({title, text})
        
    }
    async article_delete(req, res){
        const {id} = req.params
        await articles.destroy({
            where: { id: Number(id) },
            }).then(()=>{
            res.json("Удалено")
            })
    }
    async article_check(req, res, next){
        const {id} = req.params
        if (!id) {
            return next(api_error.bad_request('Не задан ID'))
        }
        res.json(await articles.findOne({
            where:{id: Number(id)}
        }))
    }
    async article_get_all(req, res){
        const Articles = await articles.findAll()
        return res.json(Articles)
    }
    async article_update(req, res, next){
        const {id} = req.params
        const {title, text} = {title:req["body"]["title"],text:req["body"]["text"]}
        if (!id) {
            return next(api_error.bad_request('Не задан ID'))
        }
        res.json(await articles.update({title, text}, {
            where:{id: Number(id)}
        }))
        
    }
    
}


module.exports = new article_controller()