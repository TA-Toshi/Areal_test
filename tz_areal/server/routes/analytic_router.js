const Router = require('express')
const router = new Router()
const analytic_controller = require('../controllers/analytic_controller.js')

router.get('/comments/?', analytic_controller.analytic)

module.exports = router