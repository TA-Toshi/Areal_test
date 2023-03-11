const Router = require('express')
const router = new Router()
const comments_controller = require('../controllers/comments_controller.js')


router.post('/:articleid/comment/', comments_controller.comment_add)
router.get('/:articleId/comment/:id',comments_controller.comment_check)
router.get('/:articleId', comments_controller.comment_get_all)
router.delete('/:articleid/comment/:id',comments_controller.comment_delete)
router.patch('/:articleId/comment/:id',comments_controller.comment_update)


module.exports = router