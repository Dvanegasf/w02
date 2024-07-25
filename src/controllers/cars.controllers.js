const catchError = require('../utils/catchError');
const Car = require('../models/Cars');


const getAll = catchError(async(req, res) => {
    const car = await Car.findAll()
    return res.json(car)

});
const create = catchError(async (req, res) => {
    const result = await Car.create(req.body)
    return res.status(201).json(result)
});


const getOne = catchError(async (req, res) => {
    const { id } = req.params
    const result = await Car.findByPk(id)
    if (!result) return res.status(404).json('user notfound')
    return res.json(result)
});

const destroy = catchError(async (req, res) => {
    const { id } = req.params
    const result = await Car.destroy({ where: { id }})
    if (!result) return res.status(404).json('user notfound')
    return res.sendStatus(204);
})

const update  = catchError(async (req, res) => {
    const { id } = req.params
    const car = await Car.update(
        req.body,
        { where: { id }, returning: true }
        )
    if  (car[0] === 0) return res.sendStatus(404)
    return res.json(car[1][0])
    })
module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
};