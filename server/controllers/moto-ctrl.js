const Moto = require('../models/moto-model')

createMoto = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a motorcycle',
        })
    }

    const moto = new Moto(body)

    if (!moto) {
        return res.status(400).json({ success: false, error: err })
    }

    moto
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: moto._id,
                message: 'Motorcycle was added!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Motorcycle was not added!',
            })
        })
}

updateMoto = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Moto.findOne({ _id: req.params.id }, (err, moto) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Motorcycle not found!',
            })
        }
        moto.mark = body.mark
        moto.model = body.model
        moto.price = body.price
        moto
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: moto._id,
                    message: 'Motorcycle updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Motorcycle not updated!',
                })
            })
    })
}

deleteMoto = async (req, res) => {
    await Moto.findOneAndDelete({ _id: req.params.id }, (err, moto) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!moto) {
            return res
                .status(404)
                .json({ success: false, error: `Motorcycle not found` })
        }

        return res.status(200).json({ success: true, data: moto })
    }).catch(err => console.log(err))
}

getMotoById = async (req, res) => {
    await Moto.findOne({ _id: req.params.id }, (err, moto) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!moto) {
            return res
                .status(404)
                .json({ success: false, error: `Motorcycle not found` })
        }
        return res.status(200).json({ success: true, data: moto })
    }).catch(err => console.log(err))
}

getMotos = async (req, res) => {
    await Moto.find({}, (err, motos) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!motos.length) {
            return res
                .status(404)
                .json({ success: false, error: `Motorcycle not found` })
        }
        return res.status(200).json({ success: true, data: motos })
    }).catch(err => console.log(err))
}

module.exports = {
    createMoto,
    updateMoto,
    deleteMoto,
    getMotos,
    getMotoById,
}