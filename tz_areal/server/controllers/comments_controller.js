const api_error = require('../error/api_error.js');
const { comments }= require('../models/models.js');

class comments_controller{
    async comment_add(req, res){
        const {articleId, text} = {articleId:req["body"]["articleId"],text:req["body"]["text"]}
        await comments.create({articleId, text})
    }
    async comment_check(req, res, next){
        const {articleId, id} = req.params

        if (!id) {
            return next(api_error.bad_request('Не задан ID'))
        }

        if(!articleId) {
            return next(api_error.bad_request('Не задан ID статьи'))
        }
        res.json(await comments.findOne({
            where: { id: Number(id), articleId: Number(articleId)},
            }))
        
    }
    async comment_delete(req, res, next){
        const {articleid, id} = req.params

        if (!id) {
            return next(api_error.bad_request('Не задан ID'))
        }

        if(!articleid) {
            return next(api_error.bad_request('Не задан ID статьи'))
        }

        await comments.destroy({
            where: { id: Number(id), articleId: Number(articleid)},
            }).then(()=>{
            res.json("Удалено")
            })

        
    }
    async comment_get_all(req, res, next){
        const {articleId} = req.params

        if(!articleId) {
            return next(api_error.bad_request('Не задан ID статьи'))
        }

        res.json(await comments.findAll({
            where:{articleId: Number(articleId)}
        }))
        
    
}
        async comment_update(req, res, next){
            const {articleId,id} = req.params
        const {text} = {text:req["body"]["text"]}
        if (!id) {
            return next(api_error.bad_request('Не задан ID'))
        }
        if(!articleId) {
            return next(api_error.bad_request('Не задан ID статьи'))
        }
        res.json(await comments.update({text}, {
            where:{id: Number(id), articleId: Number(articleId)}
        }))
            console.log(text)
        }
}

module.exports = new comments_controller()

