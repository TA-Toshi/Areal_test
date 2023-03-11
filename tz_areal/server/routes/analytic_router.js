const Router = require('express')
const router = new Router()
const analytic_controller = require('../controllers/analytic_controller.js')

// router.get({path:'/comments/',query:{'dateFrom':'timestamp','dateTo':'timestamp'}}, analytic_controller.analytic)
router.get('/comments/?', analytic_controller.analytic)

module.exports = router