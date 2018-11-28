const cityRouter = require('express').Router()
const { City, Landmark } = require('../db')

cityRouter.get('/', async (req, res, next) => {
  try {
    const cities = await City.findAll()
    res.json(cities)
  } catch (err) {
    next(err)
  }
})

cityRouter.get('/:id', async (req, res, next) => {
  try {
    const city = await City.findById(req.params.id, {
      include: [{ model: Landmark }]
    })
    res.json(city)
  } catch (err) {
    next(err)
  }
})

cityRouter.post('/', async (req, res, next) => {
  try {
    const city = await City.create({
      city: req.body.city,
      state: req.body.state
    })
    res.json(city)
  } catch (err) {
    next(err)
  }
})

cityRouter.delete('/:id', async (req, res, next) => {
  try {
    const city = await City.findById(req.params.id)
    await city.destroy()

    res.json(city)
  } catch (err) {
    next(err)
  }
})

cityRouter.put('/:id', async (req, res, next) => {
  try {
    const city = await City.findById(req.params.id)
    await city.update({
      city: req.body.city || city.name,
      state: req.body.state || city.state
    })

    res.json(city)
  } catch (err) {
    next(err)
  }
})

module.exports = cityRouter
