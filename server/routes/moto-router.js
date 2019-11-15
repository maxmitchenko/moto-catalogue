const express = require('express')

const MotoCtrl = require('../controllers/moto-ctrl')

const router = express.Router()

router.post('/moto', MotoCtrl.createMoto)
router.put('/moto/:id', MotoCtrl.updateMoto)
router.delete('/moto/:id', MotoCtrl.deleteMoto)
router.get('/moto/:id', MotoCtrl.getMotoById)
router.get('/motos', MotoCtrl.getMotos)

module.exports = router