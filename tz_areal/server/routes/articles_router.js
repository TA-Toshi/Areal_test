const Router = require('express')
const router = new Router()
const article_controller = require('../controllers/article_controller.js')

router.post('/article', article_controller.article_add)
router.get('/article/:id', article_controller.article_check)
router.get('/', article_controller.article_get_all)
router.delete('/article/:id',article_controller.article_delete)
router.patch('/article/:id', article_controller.article_update)


module.exports = router