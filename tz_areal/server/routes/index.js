const Router = require('express')
const router = new Router()
const articles_router = require('./articles_router.js')
const comments_router = require('./commets_router.js')
const analytic_router = require('./analytic_router.js')

router.use('/comments', comments_router)
router.use('/articles', articles_router)
router.use('/analytic', analytic_router)

module.exports = router