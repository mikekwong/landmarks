const router = require('express').Router()
const { City, Landmark } = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const cities = await City.findAll()
    res.json(cities)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const city = await City.findById(req.params.id, {
      include: [{ model: Landmark }]
    })
    res.json(city)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const city = await City.create({
      city: req.body.city,
      imageURL: req.body.city
    })
    res.json(city)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const city = await City.findById(req.params.id)
    await city.destroy()

    res.json(city)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const city = await City.findById(req.params.id)
    await city.update({
      city: req.body.city || city.name,
      imageURL: req.body.city || city.imageURL
    })

    res.json(city)
  } catch (err) {
    next(err)
  }
})

module.exports = router
