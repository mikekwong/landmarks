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
    const landmark = await Landmark.create({
      name: req.body.name,
      neighborhood: req.body.neighborhood,
      favorite: false,
      imageURL: req.body.imageURL
    })
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
    const landmark = await Landmark.findById(req.params.id)
    await landmark.update({
      name: req.body.name || landmark.name,
      neighborhood: req.body.neighborhood || landmark.neighborhood,
      favorite: req.body.favorite || landmark.neighborhood,
      imageURL: req.body.imageURL || landmark.imageURL
    })

    res.json(landmark)
  } catch (err) {
    next(err)
  }
})

module.exports = router
