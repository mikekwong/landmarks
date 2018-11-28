const router = require('express').Router()
const { City, Landmark } = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const landmarks = await Landmark.findAll()
    res.json(landmarks)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const landmark = await Landmark.findById(req.params.id, {
      include: [{ model: City }]
    })
    res.json(landmark)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const landmark = await Landmark.create(req.body)
    res.json(landmark)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const landmark = await Landmark.findById(req.params.id)
    await landmark.destroy()

    res.json(landmark)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
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

module.exports = router
